const router = require("express").Router();
const populatePictures = require("../../controllers/picturesController");


// Matches with "/populate/pictures"

const picturesSeedArray = [
    {
        name: "picture-1",
        image: "https://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/Experiences_Beach.jpg"
    },

    {
        name: "picture-2",
        image: "https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ace23929-4f1e-11e8-a5fd-018c7d910674_600x400.jpg"
    },

    {
        name: "picture-3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4h7dhEhOgloQrvxPKSgBWkjnHY3WuuyanMlqnZFlW_pqSDXgk"
    },

    {
        name: "picture-4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8NAsGWqtiVlS5ZOtrWWKYyBL1IjQViYXAwUj4gY-PkdfQhpb"
    },

]


router.route("/")
    .post((req, res) => {
        populatePictures.removeAll()
            .then(dbresults => {

                for (var i = 0; i < picturesSeedArray.length; i++) {
                    populatePictures.create(picturesSeedArray[i])
                        .then(dbresults => {
                            console.log("deleted and populated pictures collection")
                            
                        })
                        .catch(err => res.status(422).json(err))
                }
                res.json(dbresults)
            })
            .catch(err => res.status(422).json(err))
    });


module.exports = router;


