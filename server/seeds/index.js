
const db = require('../config/connection');
const { User, Business } = require('../models/index');
const userSeeds = require('./userSeeds.json');
const businessSeeds = require('./businessSeeds');
//const categorySeeds = require('./categorySeeds.json');


db.once('open', async () => {
    try {
        await User.deleteMany({}).catch((err) => err);
        await Business.deleteMany({}).catch((err) => err);

        await User.create(userSeeds);

        console.log('Users seeded');


        //seed businesses but also add created business id to user business's array
        for (let i = 0; i < businessSeeds.length; i++) {
            const { _id, owner } = await Business.create(
                businessSeeds[i]
            ).catch((err) => err);
            await User.findOneAndUpdate(
                { fullName: owner },
                {
                    $addToSet: {
                        business: _id,
                    },
                }
            ).catch((err) => err);

        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Businesss Seeded!');
    console.log('Seeding all done!');
    process.exit();

});
