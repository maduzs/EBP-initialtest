ALTER TABLE department ENABLE ROW LEVEL SECURITY;
ALTER TABLE department FORCE ROW LEVEL SECURITY;
ALTER TABLE employee ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee FORCE ROW LEVEL SECURITY;
CREATE POLICY user_visibility ON department USING (organization_id = TO_NUMBER(CAST(current_setting('myapp.org_id') as VARCHAR),'99999999999') OR TO_NUMBER(CAST(current_setting('myapp.org_id') as VARCHAR),'99999999999') = -1);
CREATE POLICY user_visibility ON employee USING (organization_id = TO_NUMBER(CAST(current_setting('myapp.org_id') as VARCHAR),'99999999999') OR TO_NUMBER(CAST(current_setting('myapp.org_id') as VARCHAR),'99999999999') = -1);
