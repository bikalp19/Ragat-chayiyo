const detail = [



{
    id:0,
    tittle:'bikal',
    phone:'9804498209',
    address: 'butwal,rupendehi',
    
},

{
    id:1,
    tittle:'balp',
    phone:'980000000',
    address :'fdjndjdnknf',
},
{
    id:2,
    tittle:'bikap',
    phone:'9807878780',
    address: 'jiehuehue',

}, 


]

const donner = [...new Set(detail.map ((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = donner.filter((item)=>{
        return(
            item.tittle.toLowerCase().includes(searchData)
        )
    })
    displayIteam(filterData)
});

const displayIteam = (iteam)=>{
    document.getElementById('root').innerHTML=iteam.map((iteam)=>{
        var{tittle, phone, address} = iteam;
        return(
            `<div class='box'>
            <h2>${tittle}}<h2>

            <h3>${phone}<h3>
            <P>${address}<p>


            </div>`
        )
    }).join('')
};
displayIteam(donner);