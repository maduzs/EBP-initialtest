import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { MyAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { MyAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { MyAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { MyAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { MyAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { MyAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { MyAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyAppRegionMySuffixModule,
        MyAppCountryMySuffixModule,
        MyAppLocationMySuffixModule,
        MyAppDepartmentMySuffixModule,
        MyAppTaskMySuffixModule,
        MyAppEmployeeMySuffixModule,
        MyAppJobMySuffixModule,
        MyAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppEntityModule {}
