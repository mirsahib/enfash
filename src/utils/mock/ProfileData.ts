type ProfileDataType = {
    name: string;
    email: string;
    phone: string;
    addressBook: {
        id:string
        address: string;
        title: string;
        status: 'ACTIVE' | 'DEACTIVE';
    }[];
};
const ProfileData: ProfileDataType = {
    name: 'Julian William',
    email: 'julian@gmail.com',
    phone: '+1 20243-89238423',
    addressBook: [
        {   id:'1',
            address: '120 Rohrer St, Clintonville',
            title: 'Home',
            status: 'ACTIVE'
        },
        {id:'2',
            address: '32 North Street, Crookwell',
            title: 'Work',
            status: 'DEACTIVE'
        }
    ]
};

export default ProfileData;
