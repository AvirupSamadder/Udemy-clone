

let dataarr=[1,2,3,4]

const Devlop = (dataarr) => {

    let box = document.createElement('div');
    dataarr.map(function(data,i,arr){
        if (i > 6) {
            return box.innerHTML;
        }
        let name = document.createElement('p');
        name.innerText = data;
        box.append(name)
    })
    
    return box.innerHTML;
}

function appendslider(data,parent){
    parent.innerHTMl="";
    data.map((el)=>{
        let box = document.createElement("div");
        let hoverbox = document.createElement("div");
        hoverbox.id="hoverbox";
        hoverbox.innerHTML=`${Devlop(dataarr)}`
        let subbox = document.createElement("div");
        box.setAttribute("id","slidercontent")
        let courseimage= document.createElement("img");
        courseimage.src= el.image;
        let title=  document.createElement("h4");
        title.innerText=el.title;
        let instructor= document.createElement("p");
        instructor.innerText=el.instructor;
        let rating= document.createElement("h5");
        rating.innerText=el.rating;
        let ratingdiv= document.createElement('div');
        let ratingqty= document.createElement("p");
        ratingqty.innerText=el.totalsale;
        let rating_img= document.createElement("img");
        rating_img.setAttribute("id","ratingpic")
        if(el.rating<4.5){
            rating_img.src= `https://th.bing.com/th/id/OIP.O3wbiD5XgCTesLXWdwoh5QHaBi?pid=ImgDet&w=480&h=100&rs=1`
        }else if(el.rating==4.5){
            rating_img.src= `https://th.bing.com/th/id/R.7f71a02152c2e86b399ca55ac4208a11?rik=43%2biuqEjTNXppg&riu=http%3a%2f%2fi1.wp.com%2fsupplementpolice.com%2fwp-content%2fuploads%2f2017%2f04%2f46stars_small.png&ehk=eD26%2b28nDqOEyjHuzvl50ZrP5vk0FU0Vl9nDF7syIl4%3d&risl=&pid=ImgRaw&r=0`
        }else if(el.rating>4.5){
            rating_img.src= `https://garagegympro.com/wp-content/uploads/2019/03/4-7-stars-rating.jpg`
        }
        ratingdiv.append(rating,rating_img,ratingqty);
        let pricebox= document.createElement("div");
        let price= document.createElement("h4");
        price.innerText="Rs "+el.price;
        let stprice= document.createElement("s");
        stprice.innerText="Rs"+el.stprice;
        pricebox.append(price,stprice)
        subbox.append(title,instructor,ratingdiv,pricebox)
        box.append(courseimage,subbox,hoverbox);
        parent.append(box);
    })
 }

 export default appendslider;