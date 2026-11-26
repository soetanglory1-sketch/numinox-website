import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Shield } from 'lucide-react';
import { inquiryTypes, interestAreaOptions, siteConfig } from '@/data/content';
import { supabase } from '@/lib/supabase';

type ContactFormProps = {
  defaultType?: string;
  defaultArea?: string;
};

type FormValues = {
  fullName: string;
  email: string;
  organisation: string;
  inquiryType: string;
  areaOfInterest: string;
  message: string;
  honeypot: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactForm({
  defaultType = 'general',
  defaultArea = interestAreaOptions[0],
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    organisation: '',
    inquiryType: defaultType,
    areaOfInterest: defaultArea,
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.inquiryType) {
      nextErrors.inquiryType = 'Please select an inquiry type.';
    }

    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message = 'Please provide a brief message (at least 15 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (values.honeypot.trim() !== '') {
      setStatus('success');
      setFeedbackMessage('Thank you. Your inquiry has been received.');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setFeedbackMessage('');

    const inquiryLabel =
      inquiryTypes.find((t) => t.value === values.inquiryType)?.label || values.inquiryType;

    try {
      let delivered = false;

      if (supabase) {
        const { error } = await supabase.from('enquiries').insert([
          {
            name: values.fullName.trim(),
            email: values.email.trim(),
            organisation: values.organisation.trim() || null,
            type: values.inquiryType,
            area_of_interest: values.areaOfInterest,
            message: values.message.trim(),
          },
        ]);
        if (!error) delivered = true;
      }

      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
      if (web3Key) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `[Numinox Website] ${inquiryLabel} — ${values.fullName.trim()}`,
            from_name: values.fullName.trim(),
            email: values.email.trim(),
            organisation: values.organisation.trim() || 'Not specified',
            inquiry_type: inquiryLabel,
            area_of_interest: values.areaOfInterest,
            message: values.message.trim(),
          }),
        });
        if (res.ok) delivered = true;
      }

      if (!delivered) {
        const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `[Numinox Inquiry] ${inquiryLabel} from ${values.fullName.trim()}`,
            Name: values.fullName.trim(),
            Email: values.email.trim(),
            Organisation: values.organisation.trim() || 'Not specified',
            'Inquiry Type': inquiryLabel,
            'Area of Interest': values.areaOfInterest,
            Message: values.message.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error('Unable to dispatch inquiry automatically.');
        }
      }

      setStatus('success');
      setFeedbackMessage(
        'Thank you for reaching out to Numinox. Your inquiry has been submitted and will be reviewed carefully.'
      );
      setValues({
        fullName: '',
        email: '',
        organisation: '',
        inquiryType: defaultType,
        areaOfInterest: defaultArea,
        message: '',
        honeypot: '',
      });
    } catch {
      setStatus('error');
      setFeedbackMessage(
        `We could not complete automated delivery at this moment. You can send your inquiry directly to ${siteConfig.email} using the button below.`
      );
    }
  };

  const buildMailtoFallback = () => {
    const inquiryLabel =
      inquiryTypes.find((t) => t.value === values.inquiryType)?.label || values.inquiryType;
    const subject = encodeURIComponent(`[Numinox] ${inquiryLabel} — ${values.fullName}`);
    const body = encodeURIComponent(
      `Name: ${values.fullName}\nEmail: ${values.email}\nOrganisation: ${
        values.organisation || 'N/A'
      }\nInquiry Type: ${inquiryLabel}\nArea of Interest: ${values.areaOfInterest}\n\nMessage:\n${
        values.message
      }`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Leave this field empty</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.honeypot}
          onChange={(e) => setValues({ ...values, honeypot: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={values.fullName}
            onChange={(e) => {
              setValues({ ...values, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            className={`input-field ${errors.fullName ? 'input-error' : ''}`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@organisation.org"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            className={`input-field ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="organisation"
          className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
        >
          Organisation or Institution <span className="text-ink-400">(Optional)</span>
        </label>
        <input
          id="organisation"
          type="text"
          placeholder="University, company, research group or institution"
          value={values.organisation}
          onChange={(e) => setValues({ ...values, organisation: e.target.value })}
          className="input-field"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inquiryType"
            className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
          >
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiryType"
            value={values.inquiryType}
            onChange={(e) => setValues({ ...values, inquiryType: e.target.value })}
            className="input-field"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="areaOfInterest"
            className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
          >
            Area of Interest
          </label>
          <select
            id="areaOfInterest"
            value={values.areaOfInterest}
            onChange={(e) => setValues({ ...values, areaOfInterest: e.target.value })}
            className="input-field"
          >
            {interestAreaOptions.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-wider text-ink-600 dark:text-ink-300 mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Describe your inquiry, research question, institutional proposal or collaboration idea..."
          value={values.message}
          onChange={(e) => {
            setValues({ ...values, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          className={`input-field resize-y ${errors.message ? 'input-error' : ''}`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
          <p className="text-sm text-teal-900 dark:text-teal-200 leading-relaxed">
            {feedbackMessage}
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              {feedbackMessage}
            </p>
          </div>
          <a href={buildMailtoFallback()} className="btn-secondary text-xs py-2 px-4">
            <Mail className="h-3.5 w-3.5" /> Open in Email Client
          </a>
        </div>
      )}

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="inline-flex items-start gap-2 text-xs text-ink-400 dark:text-ink-500 max-w-sm">
          <Shield className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          <span>
            Privacy notice: Information submitted is used solely to review and respond to your
            professional inquiry.
          </span>
        </p>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
