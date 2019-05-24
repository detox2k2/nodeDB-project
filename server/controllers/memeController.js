const memes = [
    {
        caption: 'I wish you would call the corporate office. Matter of fact i will provide you the number',
        image: 'https://i.kym-cdn.com/photos/images/newsfeed/000/960/082/cac.jpg'
    },
    {
        caption: 'Boy i wish you would runaway. Save me money on my grocery bill',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZJJzW-QEh26QzgWYWXwXJYq9SLXBk3yQ9k4kcQJbnGxy6eBT0A'
    },
    {
        caption: 'I wish you would try to test me. Go ahead and get my No.2 pencil',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_MwcLdY7j2Qx8ntRgBlDBkqu8E7kjQp1_HVCX3iRZAB6owJ65A'
    }
];

const getMemes = (req, res) => {
    res.json(memes);
};

const addMeme = (req, res) => {
    memes.push(req.body);
    res.json(memes);

};
const deleteMeme = (req, res) =>{
    for(let i = 0; i< memes.length; i++){
if (memes[i].caption === req.params.caption) {
    memes.splice(i,1)
}
    }
    res.json(memes);

};

const editMeme = (req, res) => {
    const {caption, image} = req.body;
    const index = memes.findIndex(element => {
        return element.caption === req.params.caption
    })
    if ( caption !==''){
        memes[index].caption = caption;
    }
    if (image !== ''){
        memes[index].image = image
    }
    res.json(memes);
};



module.exports = {
    getMemes,
    deleteMeme,
    editMeme,
    addMeme,
    }