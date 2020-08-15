import { Box, useMediaQuery } from '@material-ui/core';
import React from 'react';
import SaleOffBanner from '../../components/Banners/SaleOffBanner/SaleOffBanner';
import ShopWithConfidence from '../../components/Banners/ShopWithConfidence/ShopWithConfidence';
import Advertisement from '../../components/MyComponents/Advertisement/Advertisement';
import BlockWithTitle from '../../components/MyComponents/BlockWithTitle/BlockWithTitle';
import CreditCard from '../../components/MyComponents/CreditCard/CreditCard';
import SidebarMenu from '../../components/MyComponents/SidebarMenu/SidebarMenu';
import SumaryComponent from '../../components/MyComponents/SumaryComponent/SumaryComponent';
import TagsSidebar from '../../components/MyComponents/TagsSidebar/TagsSidebar';
import ProductHorizontalStyle from '../../components/Products/ProductHorizontalStyle/ProductHorizontalStyle';
import SliderProducts from '../../components/Products/SliderProducts/SliderProducts';
import PageSection from '../../components/Sections/PageSection/PageSection';
import ShortCuts from '../../components/ShortCuts/ShortCuts';
import SignInStyle1 from '../../components/SignIn/SignInStyle1/SignInStyle1';
import SliderHomePage from '../../components/SliderHomePage/SliderHomePage';
import Brands from '../../components/Sliders/Brands/Brands';
import SlideSimpleSlick from '../../components/Sliders/SlideSimpleSlick/SlideSimpleSlick';
import BodyComponent from '../../Layouts/ClientLayout/BodyComponent/BodyComponent';
import ClientLayout from '../../Layouts/ClientLayout/ClientLayout';
import './HomePage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { callApi } from '../../services/callApi';
import { setProducts } from '../../features/products/productsSlice';
import CATEGORIES from '../../constant/categories';

// const products = [
//   {
//     id: '1',
//     name:
//       'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
//     description: 'Product of tp link',
//     image:
//       'https://c1.neweggimages.com/NeweggImage/ProductImage/83-101-738-V01.jpg',
//     price: 3000000,
//     category: ['switch'],
//     brand: 'tp-link',
//     shipping: 0,
//   },
//   {
//     id: '2',
//     name:
//       'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
//     description: 'Product of kingston',
//     image:
//       'https://c1.neweggimages.com/NeweggImage/ProductImage/2BA-0041-00029-V01.jpg',
//     price: 500000,
//     category: ['ram'],
//     brand: 'kingston',
//     shipping: 0,
//   },
//   {
//     id: '3',
//     name:
//       'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
//     description: 'Drone Zone',
//     image:
//       'https://c1.neweggimages.com/NeweggImage/ProductImage/AMNJS200611JscRi.jpg',
//     price: 3500000,
//     category: ['drone'],
//     brand: 'drone-zone',
//     shipping: 0,
//   },
//   {
//     id: '4',
//     name:
//       'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
//     description: 'Product of Coinsair',
//     image:
//       'https://c1.neweggimages.com/NeweggImage/ProductImage/20-236-408-V01.jpg',
//     price: 1500000,
//     category: ['ram'],
//     brand: 'coinsair',
//     shipping: 0,
//   },
//   {
//     id: '5',
//     name:
//       'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
//     description: 'Product of Patriot',
//     image:
//       'https://c1.neweggimages.com/NeweggImage/ProductImage/20-225-143-V08.jpg',
//     price: 500000,
//     category: ['ram'],
//     brand: 'patriot',
//     shipping: 0,
//   },
// ];

export const CategoriesContext = React.createContext([]);

function HomePage(props) {
  const mediaMD = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    callApi.get().then((res) => {
      if (res.status === 200) {
        dispatch(setProducts(res.data));
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <ClientLayout className="ClientLayout">
      <BodyComponent>
        <Box className="menus-slider-wrapper">
          <div className="menus">
            <SidebarMenu />
          </div>

          <div className="slider">
            <SliderHomePage />
          </div>
        </Box>
        {!mediaMD && <ShortCuts />}
        {!mediaMD && <SignInStyle1 />}
        <PageSection
          className="best-deals-section page-section-1"
          title="Today's Best Deals"
          subTitle="See All Deals"
          subTitleBottom="See All Deals"
        >
          <div className="best-deals-section__inner">
            <SlideSimpleSlick products={products} />
            <div className="list-item">
              <ProductHorizontalStyle
                products={products.slice(0, 4)}
              />
            </div>
          </div>
        </PageSection>
        {mediaMD && (
          <PageSection
            isGray
            className="page-section-2 sumary-section"
          >
            <CategoriesContext.Provider value={CATEGORIES}>
              <SumaryComponent products={products.slice(0, 3)} />
            </CategoriesContext.Provider>
          </PageSection>
        )}

        {mediaMD && (
          <BlockWithTitle
            title="PRODUCTS YOU MAY BE INTERESTED IN"
            subTitle="See more"
          >
            <SliderProducts />
          </BlockWithTitle>
        )}
        {mediaMD && (
          <PageSection isGray>
            <SaleOffBanner />
          </PageSection>
        )}

        <PageSection
          isGray
          title="SPOTLIGHT: STAFF PICKS"
          subTitle="See more"
        >
          <ProductHorizontalStyle
            products={products.slice(0, 3)}
            customStyle="flex-horizontal"
          />
        </PageSection>
        <PageSection className="top-and-trending">
          <div className="top-and-trending__left">
            <div>
              <BlockWithTitle
                title="WHAT'S GETTING THE MOST ATTENTION"
                subTitle="See More"
                noPadding
              ></BlockWithTitle>
              <SlideSimpleSlick
                products={products}
                amount={4}
                showAddBtn={false}
                useThumbnail={false}
              />
            </div>
            <div>
              <BlockWithTitle
                title="TRENDING NOW"
                subTitle="See More"
                noPadding
              ></BlockWithTitle>
              <SlideSimpleSlick
                products={products}
                amount={4}
                showAddBtn={false}
                useThumbnail={false}
              />
            </div>
          </div>
          {mediaMD && (
            <div className="top-and-trending__right">
              <Advertisement />
            </div>
          )}
        </PageSection>
        <PageSection className="top-rate" isGray>
          <div className="top-rate__left">
            <div>
              <BlockWithTitle
                title="TOP-RATED ITEMS"
                subTitle="See More"
                noPadding
                onlyTitle
              ></BlockWithTitle>
              <SlideSimpleSlick
                products={products}
                amount={4}
                showAddBtn={false}
                useThumbnail={false}
              />
            </div>
            <div>
              <BlockWithTitle title="SHOP WITH CONFIDENCE" noPadding>
                <ShopWithConfidence />
              </BlockWithTitle>
            </div>
          </div>
          {mediaMD && (
            <div className="top-rate__right">
              <CreditCard />
              <Brands />
              <TagsSidebar />
            </div>
          )}
        </PageSection>
      </BodyComponent>
    </ClientLayout>
  );
}

export default HomePage;
