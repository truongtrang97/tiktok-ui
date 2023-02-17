import * as request from 'src/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
        // console.log(res)
        // setSearchResults(res.data)
        // sau khi gọi API
        //  setLoadingResults(false)
    } catch (error) {
        // setLoadingResults(false)
        console.log('error');
    }
};
