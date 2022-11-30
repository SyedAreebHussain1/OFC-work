import React from 'react';
import './styleareeb.css'
const SelectBox = () => {
    const items = [
        {
            key: '1',
            heading: 'Leave no stone unturned!',
            title: 'Inventory Managment',
            content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.'
        },
        {
            key: '2',
            heading: 'Oversee your team of agents on-the go!',
            title: 'Staff Managment',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
            key: '3',
            heading: 'Quickest way to calculate commissions!',
            title: 'Commision Management',
            content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
        },
        {
            key: '4',
            heading: 'Quickest way to calculate commissions!',
            title: 'Report Management',
            content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
        },
        {
            key: '5',
            heading: 'Quickest way to calculate commissions!',
            title: 'Payment Plan Calculator',
            content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
        },
        {
            key: '6',
            heading: 'Quickest way to calculate commissions!',
            title: 'sales Target',
            content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
        }
    ]


    // var acc = document.getElementsByClassName("accordion");
    // var i;
    // for (i = 0; i < acc.length; i++) {
    //     console.log(acc[i].addEventListener)
    //     acc[i].addEventListener("click", function () {
    //         console.log("asdfdf");
    //         this.classList.toggle("active12");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             console.log(panel.style.display)
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // }

    const foo = (index) => {
        var acc = document.getElementsByClassName("accordion");
        acc[index].addEventListener("click", function () {
            console.log("asdfdf");
            this.classList.toggle("active12");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                console.log(panel.style.display)
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    return (
        <>
            {
                items.map((item_v, i) => {
                    console.log(item_v)
                    return (
                        <div>
                            <button className="accordion" onClick={() => foo(i)} >{item_v.title}</button>
                            <div className="panel">
                                <h4>{item_v.heading}</h4>
                                <p>{item_v.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
};
export default SelectBox;
