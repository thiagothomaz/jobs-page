import { resolver } from 'graphql-sequelize';
import to from 'await-to-js';
import { Job } from '../../models';

export const Mutation = {
    createJob: resolver(Job, {
        before: async (findOptions, { data }) => {
            let err, job;
            [err, job] = await to(Job.create(data) );
            if (err) {
            throw err;
            }
            findOptions.where = { id:job.id };
            return findOptions;
        },
        after: (job) => {
            return job;
        }
    }),
};