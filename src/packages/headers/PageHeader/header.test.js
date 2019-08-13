import React from 'react';
import { render } from 'test-utils';
import Header from '.';

describe('<Header />', () => {
  it('should be defined', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Header
        title="Floortje naar het einde van de wereld"
        subtitle="Elke werkdag 20:00 uur op NPO 2"
        description="<p>In Floortje Naar Het Einde Van De Wereld reist Floortje Dessing naar de verste uithoeken op aarde om mensen te bezoeken die ervoor kiezen om op zo’n afgelegen plek te wonen.</p>"
        image="https://images.poms.omroep.nl/image/s1280/c1280x720/639755.png"
        mobileImage="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        brandLogo="https://content.presspage.com/uploads/1799/500_logo-clean-zwart.png"
        color="white"
        socialText="VOLG ONS"
        facebook="https://facebook.com"
        instagram="https://instagram.com"
        twitter="https://twitter.com"
        youtube="https://youtube.nl"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
