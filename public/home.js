async function getnews() {
    for (let j = 0; j < 5; j++) {
        const url = '/test';
        output = "";
        timesvg = '<svg width="16" height="16" viewBox="0 0 16 16">< defs ><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" fill="#555"></path><path d="M9 9H5V8h3V4h1v5z" fill="#555"></path></defs ></svg >';
        const response = await fetch(url);
        const data = await response.json();
        let Articles = [];
        Articles = data.articles;
        Articles.forEach((element, i) => {
            const title = Articles[i].title;
            const source = Articles[i].source.name;
            const image = Articles[i].urlToImage;
            var time = Articles[i].publishedAt;
            var date = moment(time);
            var time = date.fromNow();
            const desc = Articles[i].description;
            output = output + "<li style='display:flex;flex-direction:column;border-bottom: 1px solid #ccc;margin: 5% 0%;'>";
            if (image != null) {
                output += "<img src='" + image + "' width='72%' height='48%'style='margin:auto'>";
            };
            output += '<h4 style="line-height: 22px;font: 700  20px Escrow Condensed, Georgia, serif !important;margin:5px;">' + title + '</h4>';
            output += '<p style="font: 100  14px Exchange, Georgia, serif;margin:5px;">' + desc + '</p >';
            output += '<h4 style="font: 100  12px Exchange, Georgia, serif;margin:5px 0px;align-self: flex-end;font-family:Retina,Helvetica,Arial,sans-serif !important;">' + timesvg + "" + time + '</h4></li>';
        })
        var list = ".list-" + j;
        $(list).html(output);
    }
}
getnews();
setInterval(getnews,30000);