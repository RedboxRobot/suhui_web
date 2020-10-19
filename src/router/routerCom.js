import React from 'react';
import WebLayoutPc from '@/views/pc/layout/index';
import WebLayoutMobile from '@/views/mobile/layout/index';
import HomePc from '@/views/pc/home/index';
import HomeMoile from '@/views/mobile/home/index';
import ProductPc from '@/views/pc/product/index';
import ProductMobile from '@/views/mobile/product/index';
import AboutPc from '@/views/pc/about/index';
import AboutMobile from '@/views/mobile/about/index';

import MediaQuery from 'react-responsive';

function RouterLayout(props) {

  const { ...route } = props;

  return (
    <div>
      <MediaQuery query="(min-device-width:1224px)">
        <WebLayoutPc {...props} routes={route.routes}/>
      </MediaQuery>
      <MediaQuery query="(max-device-width:1224px)">
        <WebLayoutMobile {...props} routes={route.routes} />
      </MediaQuery>
    </div>
  );
}

function RouterHome(props) {

  const { ...route } = props;

  return (
    <div>
      <MediaQuery query="(min-device-width:1224px)">
        <HomePc {...props} routes={route.routes}/>
      </MediaQuery>
      <MediaQuery query="(max-device-width:1224px)">
        <HomeMoile {...props} routes={route.routes} />
      </MediaQuery>
    </div>
  );
}

function RouterProduct(props) {

  const { ...route } = props;

  return (
    <div>
      <MediaQuery query="(min-device-width:1224px)">
        <ProductPc {...props} routes={route.routes}/>
      </MediaQuery>
      <MediaQuery query="(max-device-width:1224px)">
        <ProductMobile {...props} routes={route.routes} />
      </MediaQuery>
    </div>
  );
}

function RouterAbout(props) {

  const { ...route } = props;

  return (
    <div>
      <MediaQuery query="(min-device-width:1224px)">
        <AboutPc {...props} routes={route.routes}/>
      </MediaQuery>
      <MediaQuery query="(max-device-width:1224px)">
        <AboutMobile {...props} routes={route.routes} />
      </MediaQuery>
    </div>
  );
}

export { RouterLayout, RouterHome, RouterProduct, RouterAbout };

