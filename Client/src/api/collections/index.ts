import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

export const getRecipes = {
	useQuery: (opt?: UseQueryOptions<Array<recipesType>, Error>) => {
		return useQuery<recipesType[], Error>({
			queryKey: ['recipes'],
			queryFn: async () => {
				const request = await axios.get(`recipes`);
				return request.data.data;
			},
			...opt
		});
	}
};

export const addRecipes = {
    useMutation: (opt?: Partial<UseMutationOptions<recipesType, Error, addRecipesType>>) => {
        return useMutation<recipesType, Error, addRecipesType>({
            mutationFn: async (recipes) => {
                const request = await axios.post(`recipes`, recipes);
                return request.data.data;
            },
            ...opt
        })
    }
}