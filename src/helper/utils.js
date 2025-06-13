export const CategoryList = [
    {id:'65c608806782899b0698f069',name:'Restaurants'},
    {id:'65c617ba6782899b069910fd',name:'Hotels'},
    {id:'65c61866ea562b9cfd579468',name:'Golf'},
    {id:'6633225437f7eb145bc1e92f',name:'Wellness'}
]

export const powerByImgList = [
    "",
    "media/img/opentable.svg",
    "media/img/sroom.svg",
    "media/img/yelp.svg",
    "media/img/gl.svg",
    "media/img/resy.svg",
    "media/img/gn-logo.svg",
    "media/img/Clubcaddie-logo.svg",
    "media/img/lightspeed.svg",
    "media/img/ForeUp.svg",
    "media/img/Club-Prophet-Logo.svg"
]

export const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const [hour, minute] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
};

export const formatPhoneNumber = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
};