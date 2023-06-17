import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1/employee/'

export const getAll = async () => {
    const response = await axios.get(baseUrl + 'getall');
    return response.data;
};

export const save = async (entity) => {
    const mode = entity.id == undefined? 'create' : 'update';
    const response = await axios.post(baseUrl + mode, entity);
    return response.data;
};

export const deleteEntity = async (id) => {
    const response = await axios.delete(baseUrl + 'delete/' + id);
    return response.data;
};