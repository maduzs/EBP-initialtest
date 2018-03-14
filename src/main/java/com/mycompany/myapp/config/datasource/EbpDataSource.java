package com.mycompany.myapp.config.datasource;

import com.mycompany.myapp.security.SecurityUtils;
import com.zaxxer.hikari.HikariDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Optional;

public class EbpDataSource extends HikariDataSource {

    private final Logger log = LoggerFactory.getLogger(EbpDataSource.class);

    private final String STORED_PROCEDURE_NAME = "set_visibility";

    @Override
    public Connection getConnection() throws SQLException {

        log.debug("Get DB connection. User: {}", SecurityUtils.getCurrentUserLogin());

        Connection connection = super.getConnection();

        // user
        Optional<String> currentUser = SecurityUtils.getCurrentUserLogin();

        // default
        String storedProcedureParameter = "-1";

        if (currentUser.isPresent() && currentUser.get().length() > 0) {
            storedProcedureParameter = currentUser.get();
        }

        CallableStatement callableStatement = connection.prepareCall("{call " + STORED_PROCEDURE_NAME + "(?)}");
        callableStatement.setString(1, storedProcedureParameter);
        callableStatement.execute();

        return connection;
    }

}

