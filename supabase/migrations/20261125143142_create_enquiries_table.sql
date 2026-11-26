CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organisation text,
  type text NOT NULL CHECK (type IN ('general', 'research', 'institutional', 'partnership', 'product', 'technical', 'other')),
  area_of_interest text,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON enquiries TO authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
  ON enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries"
  ON enquiries FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries"
  ON enquiries FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries"
  ON enquiries FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS enquiries_submitted_at_idx ON enquiries (submitted_at DESC);
