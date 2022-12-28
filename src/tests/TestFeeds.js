


import axios from "axios"

const assignTestRecipePhotos = () => { 

    const test_photos = [ 
        {
            "src": "https://static01.nyt.com/images/2022/10/11/dining/kc-manicotti-copy/kc-manicotti-mediumSquareAt3X.jpg"
        },
        {
        "src": "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        },
        {
        "src": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/copycat-hamburger-helper1-1659463591.jpg?crop=0.668xw:1.00xh;0.176xw,0&resize=640:*",
        },
        {
        "src": "https://www.tasteofhome.com/wp-content/uploads/2022/03/GettyImages-1178684940-scaled-e1647271049457.jpg",
        },
        {
        "src": "https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg",
        },
        {
            "src": "https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash.jpg"
        },
        {
            "src": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_767,q_65,w_640/v1/clients/panama/temp_061b9017-6a65-45e5-90a9-166da4633227.jpg"
        },            {
            "src": "https://www.allrecipes.com/thmb/j-RAWLdNzEDtIoHw6LJU-TzhzBI=/400x262/filters:no_upscale():max_bytes(150000):strip_icc()/1364163-a74729ce4e9746b0923d7b01575c790b.jpg"
        },            {
            "src": "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps150056_SD153319B10_07_4b-27.jpg?fit=700,700"
        },            {
            "src": "https://www.tasteofhome.com/wp-content/uploads/2017/10/Melt-in-Your-Mouth-Chuck-Roast_EXPS_CWON16_41035_C06_29_3b.jpg"
        },            {
            "src": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Italian-Pot-Roast_EXPS_BFBZ19_35398_E01_17_3b-4.jpg?fit=696,696"
        },            {
            "src": "https://www.keepingitsimpleblog.com/wp-content/uploads/2020/10/pot-roast-center-shot-768x1024.jpg"
        },            {
            "src": "https://www.allrecipes.com/thmb/OdHHoil3H3SdfogxeqLbzkgaCY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9376148-grandmas-best-pot-roast-soup-loving-nicole-1bd59d2fc0ab4ac5bf373c1cbea079b2.jpeg"
        },            {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpG81GgYDlU-flbxwASWlYMUUJdHAk7eSR2Gs2ewzv823tuTTSqL9htJYLYwF7YwFuFA&usqp=CAU"
        },            {
            "src": "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/italian-pot-roast-recipe.jpg"
        },            {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpG81GgYDlU-flbxwASWlYMUUJdHAk7eSR2Gs2ewzv823tuTTSqL9htJYLYwF7YwFuFA&usqp=CAU"
        },            {
            "src": "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg"
        },            {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XseKJGKp1Hwch1gHZouw5GGJAegRI-z3fhpaDluPlawraWngS0OgXh2s_7fy6YXRo48&usqp=CAU"
        },            {
            "src": "https://www.exploorperu.com/wp-content/uploads/2020/08/Best-food-try-peru-exploor-causa.jpg"
        },            {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WeYvF30lRU3C2O20OCF_W7I6tCWhiCElKrlhVELsPP4U2yKNo1SsL7koiNK-V5q8fvg&usqp=CAU"
        },            {
            "src": "https://pbs.twimg.com/media/Ef4qLkNXYAAuo5r.jpg"
        },            {
            "src": "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/Original_16834_cuisine-senegalaise-thieboudienne.jpg.webp?itok=DVsVPxdY"
        },            {
            "src": "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/20/Weekend/Images/WKcover009.JPG?t=20170517"
        },            {
            "src": "https://www.healthsoothe.com/wp-content/uploads/2018/07/Amala2Band2BEwedu2BSoup.jpg"
        },            {
            "src": "https://demandafrica.com/wp-content/uploads/2018/07/Popular-African-Foods-Egusi-Soup-Melon-Seed-Stew-with-Fufu.jpg"
        },
    ]

    let randomized = test_photos[Math.floor(Math.random() * test_photos.length)]
    const randomList = [randomized]
    return randomList
}

const assignProfilePics = () => { 
    let randomID = parseInt(Math.random() * 100000)
    return `https://i.pravatar.cc/${randomID}/`
}

export{ 
    assignTestRecipePhotos,
    assignProfilePics,
}