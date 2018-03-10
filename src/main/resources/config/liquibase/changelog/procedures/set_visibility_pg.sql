CREATE OR REPLACE FUNCTION set_visibility(username VARCHAR) RETURNS void AS $$
BEGIN
    IF username = 'user' THEN
        PERFORM set_config('myapp.org_id','1',false);
    ELSIF username = 'system' THEN
        PERFORM set_config('myapp.org_id','2',false);
    ELSE
        PERFORM set_config('myapp.org_id', '-1' ,false);
    END IF;
END;
$$ LANGUAGE plpgsql;
