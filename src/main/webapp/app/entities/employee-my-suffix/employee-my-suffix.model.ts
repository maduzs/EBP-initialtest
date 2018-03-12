import { BaseEntity } from './../../shared';

export class EmployeeMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public hireDate?: any,
        public salary?: number,
        public commissionPct?: number,
        public departmentDepartmentName?: string,
        public departmentId?: number,
        public jobs?: BaseEntity[],
        public managerFirstName?: string,
        public managerId?: number,
        public organizationName?: string,
        public organizationId?: number,
    ) {
    }
}
