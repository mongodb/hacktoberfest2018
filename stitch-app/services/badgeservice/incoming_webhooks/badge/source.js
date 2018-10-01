
exports = function(payload,response){
  
  console.log("Response: " + response);
  const http = context.services.get("badgeservice");

  var upbutton = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='128' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='128' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#555' d='M0 0h105v20H0z'/><path fill='#4c1' d='M105 0h23v20H105z'/><path fill='url(#b)' d='M0 0h128v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='535' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='950'>mongodb stitch app</text><text x='535' y='140' transform='scale(.1)' textLength='950'>mongodb stitch app</text><text x='1155' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='130'>up</text><text x='1155' y='140' transform='scale(.1)' textLength='130'>up</text></g> </svg>";
  var downbutton = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='142' height='20'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='142' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#a)'><path fill='#555' d='M0 0h105v20H0z'/><path fill='#e05d44' d='M105 0h37v20H105z'/><path fill='url(#b)' d='M0 0h142v20H0z'/></g><g fill='#fff' text-anchor='middle' font-family='DejaVu Sans,Verdana,Geneva,sans-serif' font-size='110'> <text x='535' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='950'>mongodb stitch app</text><text x='535' y='140' transform='scale(.1)' textLength='950'>mongodb stitch app</text><text x='1225' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='270'>down</text><text x='1225' y='140' transform='scale(.1)' textLength='270'>down</text></g> </svg>";
  var rtn = downbutton;
  
  const appid = payload.query.appid || '';
  const today = Date(Date.now()) || ''; 
  const repo = payload.query.repo || "";
  
  const log = {
    appid: appid,
    date: today,
    repo: repo
  };
  
  const mongodb = context.services.get("mongodb-atlas");
  const badgelog = mongodb.db("hacktoberfest").collection("badgelog");
  
  badgelog.insertOne(log);
  
  return http
    .get({ url: "https://stitch.mongodb.com/api/client/v2.0/app/" + appid + "/auth/providers" })
    .then(resp => {
      // Shorten the response body
      resp.body = resp.body.text().substring(0, 10) + "...";
      console.log("Status: " + resp.status);
      if (resp.status == "200 OK") {
        rtn = upbutton;
      } else {
        rtn = downbutton;
      }
      console.log("return " + rtn);
      response.setHeader("Content-Type", "image/svg+xml");
      response.setBody(rtn);
    });
    
};