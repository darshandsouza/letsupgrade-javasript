
function pic1()
{

    const pic = document.getElementById("hel");
    console.log(pic.id);
    pic.src ="https://i.ytimg.com/vi/d1FZGpv2-Q4/maxresdefault.jpg";

}

function pic2()
{

    const pic = document.getElementById("hel");
    console.log(pic.id);
    pic.src ="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg";

}

function pic3()
{

    const pic = document.getElementById("hel");
    console.log(pic.id);
    pic.src ="https://cdn.naturettl.com/wp-content/uploads/2019/04/22003658/rain-assign-900x600.jpg";

}
function changeImage() {
    const ele = document.getElementById("image");
    console.log(ele.id);
    const newUrl =
      "https://s3.r29static.com/bin/entry/ce2/x,80/2169674/image.jpg";
  
    ele.src = newUrl;
  }