import { resolver } from 'graphql-sequelize';
import to from 'await-to-js';
import { Job } from '../../models';

export const JobMap = {
    company: resolver(Job.associations.company),
};