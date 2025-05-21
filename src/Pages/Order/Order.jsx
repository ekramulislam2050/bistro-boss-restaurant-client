import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderShopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoverMenu from "../../Hook/CoverMenu";

import OrderTab from "../../Components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad","pizza","soups","desserts","drinks"]
    const { category}=useParams()
    const initialCategory =categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialCategory)
    const [menuData] = CoverMenu()
    
    // console.log(menuData)
    const drinks = menuData.filter(item => item.category === "drinks")
    const desserts = menuData.filter(item => item.category === "dessert")
    const pizza = menuData.filter(item => item.category === "pizza")
    const salads = menuData.filter(item => item.category === "salad")
    const soups = menuData.filter(item => item.category === "soup")
    // console.log(soups)
    return (
        <div>
             <Helmet>
                  <title>order page</title>
             </Helmet>
            <Cover img={orderShopImg} title={"Order food"}></Cover>

            <div className="py-10 text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                         <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                          <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
             
        </div>

    );
};

export default Order;