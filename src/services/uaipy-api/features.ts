import { api } from '@/services/uaipy-api/api';
import { ApiResponse } from './types';
import { Feature } from '@/lib/Features';

export const featuresService = {
    getFeatures: async () => {
        const { data } = await api.get<ApiResponse<Feature[]>>('/features.json');
        return data;
    }
};