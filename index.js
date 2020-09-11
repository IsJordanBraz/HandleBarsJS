const dataSource = {
    "videoCard": [
        {
            "model": "GTX 1050",
            "madeBy": "Asus",
            "memory": "4GB",
            "price": "R$ 1.149,90",
        },
        {
            "model": "RTX 2060",
            "madeBy": "Asus",
            "memory": "6GB",
            "price": "R$ 2.259,90",
        },
        {
            "model": "GTX 1650",
            "madeBy": "Pny",
            "memory": "4GB",
            "price": "R$ 1.099,90",
        },
        
    ]
};

(() => {
    const videoCardTemplate = document.getElementById("videoCard-template").innerHTML;
    const _videoCardTemplate = Handlebars.compile(videoCardTemplate);
    
    document.getElementById("videoCard-list").innerHTML = _videoCardTemplate(dataSource);
    
})();

