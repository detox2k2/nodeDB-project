const memes = [
    {
        caption: '',
        image: '',
        id: 1
    },
    
  
];

const getMemes = (req, res) => {
    res.json(memes);
};

const addMeme = (req, res) => {
    console.log(req.body)
    memes.push(req.body);
    res.json(memes);

};
const deleteMeme = (req, res) => {
    const {caption} =  req.params
    for (let i = 0; i < memes.length; i++) {
      if (memes[i].caption === caption) {
        memes.splice(i, 1);
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