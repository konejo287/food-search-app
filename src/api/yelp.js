import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cWMcc-xZlgMNxeLEnBy3zt0AccyLBlwZZHYEVjYiSaYc7EYP8I3F6FVuU3k7gCaIunTY_yoWrr7OmoVvm0vCUX8U27yGbGaPZu0myinE2rigSJOydPOLaEsfYa96XXYx'
    }
});