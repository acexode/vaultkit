import React from 'react';

import { Box, Typography } from '@mui/material';

import Header from 'src/layouts/main/Header';

import * as StyledC from './LandingStyled';
import laptop from '../../assets/laptop.png';
import ellipse from '../../assets/ellipse.png';
import demoIcon from '../../assets/demoIcon.png';
import multiUser from '../../assets/multi-user.png';
import curlyArrow from '../../assets/curly-arrow.png';

const LandingViewTwo = () => (
  <StyledC.LandingPageDesktop>
    <Box>
      <Header />
    </Box>

    <Box>
      <StyledC.Hero>
        <Box sx={{ position: 'absolute', top: '30px', left: '0px', borderRadius: '50%' }}>
          {' '}
          <img alt="" src={ellipse} />{' '}
        </Box>
        <div>
          <StyledC.HeroTextHolder>
            <StyledC.Heading>
              <Typography variant="span" sx={{ lineHeight: '77px', fontWeight: 600 }}>
                Unlock the power of
              </Typography>{' '}
              <StyledC.VerifiedText>verified, </StyledC.VerifiedText>
              <br />
              <StyledC.VerifiedText variant="span">secure data</StyledC.VerifiedText>{' '}
              <Typography variant="span" sx={{ lineHeight: '77px', fontWeight: 600 }}>
                with VaultKit
              </Typography>{' '}
              🔐
            </StyledC.Heading>
            <StyledC.Supportingtext>
              Helping companies obtain verified data and empowering users to manage and share their
              data with full control and security.
            </StyledC.Supportingtext>
          </StyledC.HeroTextHolder>
          <StyledC.ActionWrapper>
            <StyledC.CurlyArrow loading="lazy" src={curlyArrow} />
            <StyledC.Actions>
              <StyledC.GetStarted>
                <StyledC.GetStartedBase>Get Started</StyledC.GetStartedBase>
              </StyledC.GetStarted>
              <StyledC.RequestDemo>
                <StyledC.RequestDemoBase>
                  <StyledC.DemoIcon loading="lazy" src={demoIcon} />
                  <StyledC.Text>Request Demo</StyledC.Text>
                </StyledC.RequestDemoBase>
              </StyledC.RequestDemo>
            </StyledC.Actions>
          </StyledC.ActionWrapper>
          <StyledC.Img4 loading="lazy" srcSet={laptop} />
        </div>
      </StyledC.Hero>
      <StyledC.FeaturesForIndividuals>
        <Box sx={{width: '100%', padding: '70px 55px'}}>
          <StyledC.Div5>
            <StyledC.Column>
              <StyledC.Div6>
                <StyledC.Div7>
                  <StyledC.Div8>
                    <StyledC.Badgegroup>
                      <StyledC.Badge>
                        <StyledC.Badgebase>Features - FOR INDIVIDUALS</StyledC.Badgebase>
                      </StyledC.Badge>
                    </StyledC.Badgegroup>
                    <StyledC.Div9>
                      <StyledC.Heading2>
                        Cutting-edge features for secure{' '}
                        <StyledC.VerifiedText fontWeight="600">
                          data management
                        </StyledC.VerifiedText>{' '}
                        and sharing
                      </StyledC.Heading2>
                      <StyledC.Supportingtext2>
                        Easily verify and share your data with companies, knowing you have full
                        control over who can access it and under what conditions.
                      </StyledC.Supportingtext2>
                    </StyledC.Div9>
                  </StyledC.Div8>
                  <StyledC.Avatargroup>
                    <StyledC.Img5
                      loading="lazy"
                      srcSet={multiUser}
                    />
                  </StyledC.Avatargroup>
                </StyledC.Div7>
                <StyledC.Actions2>
                  <StyledC.GetStarted>
                    <StyledC.GetStartedBase>Get Started</StyledC.GetStartedBase>
                  </StyledC.GetStarted>
                  <StyledC.RequestDemo>
                    <StyledC.RequestDemoBase>
                      <StyledC.DemoIcon loading="lazy" src={demoIcon} />
                      <StyledC.Text>Request Demo</StyledC.Text>
                    </StyledC.RequestDemoBase>
                  </StyledC.RequestDemo>
                </StyledC.Actions2>
              </StyledC.Div6>
            </StyledC.Column>
            <StyledC.Column2>
              <StyledC.Div10>
                <StyledC.Div11>
                  <StyledC.Featuretext>
                    <StyledC.Img7
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/df62390869652bac395db464c6ccf3fdcb0d614b665c7483d65fffa304a5e67a?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div12>
                      <StyledC.Text3>Store Your Personal Information</StyledC.Text3>
                      <StyledC.Supportingtext3>
                        Securely store your personal data in an your encrypted vault and share
                        easily.{' '}
                      </StyledC.Supportingtext3>
                    </StyledC.Div12>
                  </StyledC.Featuretext>
                </StyledC.Div11>
                <StyledC.Div13>
                  <div>
                    <StyledC.Img8
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dba18c6263eeda2c156c9c3fbea9e05ff0dbe4e1d2cb606121da047ebe6dac2?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div14>
                      <StyledC.Text4>Verify and Share Your Data</StyledC.Text4>
                      <StyledC.Supportingtext4>
                        Verify your data on VaultKit to show credibility to companies, for personal
                        and professional use.
                      </StyledC.Supportingtext4>
                    </StyledC.Div14>
                  </div>
                </StyledC.Div13>
                <StyledC.Div15>
                  <div>
                    <StyledC.Img9
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c26c7b09fea28dbea4e3a701f8689af2deec7b2e2c6872b6d89568562b86cc2?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div16>
                      <StyledC.Text5>Handle Data Requests</StyledC.Text5>
                      <StyledC.Supportingtext5>
                        Approve or deny data requests quickly and securely.
                      </StyledC.Supportingtext5>
                    </StyledC.Div16>
                  </div>
                </StyledC.Div15>
                <StyledC.Div17>
                  <div>
                    <StyledC.Img10
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/004ee6ac5b4732281a71e7cd83601c62babb213cf1a6a2ebae457ab338834cea?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div18>
                      <StyledC.Text6>Gain Insights</StyledC.Text6>
                      <StyledC.Supportingtext6>
                        Approve or deny data requests quickly and securely.
                      </StyledC.Supportingtext6>
                    </StyledC.Div18>
                  </div>
                </StyledC.Div17>
                <StyledC.Div19>
                  <div>
                    <StyledC.Img11
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bde877cfdab69d9b304aec1edf82b36757888adc531bd38c0ef0c1d19cc7dc5f?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div20>
                      <StyledC.Text7>Share data updates</StyledC.Text7>
                      <StyledC.Supportingtext7>
                        Notify & get notified of data changes.
                      </StyledC.Supportingtext7>
                    </StyledC.Div20>
                  </div>
                </StyledC.Div19>
              </StyledC.Div10>
            </StyledC.Column2>
          </StyledC.Div5>
        </Box>
      </StyledC.FeaturesForIndividuals>
      <StyledC.FeaturesForCompanies>
        <StyledC.Div21>
          <StyledC.Div22>
            <StyledC.Badgegroup2>
              <div>
                <div>FOR COMPANIES</div>
              </div>
            </StyledC.Badgegroup2>
            <StyledC.Heading3>
              Why your{' '}
              <StyledC.VerifiedText fontWeight="600" sx={{ color: 'rgba(255,87,87,1)' }}>
                company
              </StyledC.VerifiedText>{' '}
              needs VaultKit
            </StyledC.Heading3>
            <StyledC.Supportingtext8>
              Our system not only ensures that companies receive accurate and verified data, but it
              also empowers users to have full control over their personal information.
            </StyledC.Supportingtext8>
          </StyledC.Div22>
        </StyledC.Div21>
        <StyledC.Div23>
          <StyledC.Div24>
            <StyledC.Div25>
              <StyledC.Column3>
                <StyledC.Div26>
                  <StyledC.Featuretext6>
                    <StyledC.Img12
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9658052f4050e7f2333a21bfc99cc39508b8be580f16d551635cfef7a657c2e?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div27>
                      <StyledC.Text8>Request Data Easily</StyledC.Text8>
                      <StyledC.Supportingtext9>
                        Send secure data requests to users with just a few clicks.
                      </StyledC.Supportingtext9>
                    </StyledC.Div27>
                  </StyledC.Featuretext6>
                  <StyledC.Div28 />
                </StyledC.Div26>
              </StyledC.Column3>
              <StyledC.Column4>
                <StyledC.Div29>
                  <StyledC.Featuretext7>
                    <StyledC.Img13
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/74c0ac36264072fb651ab141f92efc75aa82fe60215236a3deed7352a47c5773?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div30>
                      <StyledC.Text9>Receive Verified Data</StyledC.Text9>
                      <StyledC.Supportingtext10>
                        Access up-to-date, verified data from users, enhancing your data accuracy.
                      </StyledC.Supportingtext10>
                    </StyledC.Div30>
                  </StyledC.Featuretext7>
                  <StyledC.Div31 />
                  <StyledC.Featuretext8>
                    <StyledC.Img14
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c25f6c688baf202fe81ee478fa26e6a4a006e10108467eed6734b06496d9eb?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div32>
                      <StyledC.Text10>Stay Informed</StyledC.Text10>
                      <StyledC.Supportingtext11>
                        Get notifications whenever users update their data, ensuring you always have
                        the latest information.
                      </StyledC.Supportingtext11>
                    </StyledC.Div32>
                  </StyledC.Featuretext8>
                </StyledC.Div29>
              </StyledC.Column4>
            </StyledC.Div25>
          </StyledC.Div24>
          <StyledC.Div33>
            <StyledC.Div34>
              <StyledC.Column5>
                <StyledC.Div35>
                  <StyledC.Featuretext9>
                    <StyledC.Img15
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7f187ac1f6f1ffb1ea1d68b220b1e1efbb56037dcd6e3a77d0391f5658ef0c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                    <StyledC.Div36>
                      <StyledC.Text11>Enhance Compliance</StyledC.Text11>
                      <StyledC.Supportingtext12>
                        Ensure your data collection and management processes meet regulatory
                        requirements
                      </StyledC.Supportingtext12>
                    </StyledC.Div36>
                  </StyledC.Featuretext9>
                  <StyledC.Div37 />
                </StyledC.Div35>
              </StyledC.Column5>
              <StyledC.Column6>
                <StyledC.Featuretext10>
                  <StyledC.Img16
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c25f6c688baf202fe81ee478fa26e6a4a006e10108467eed6734b06496d9eb?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                  />
                  <StyledC.Div38>
                    <StyledC.Text12>Build Trust</StyledC.Text12>
                    <StyledC.Supportingtext13>
                      Foster trust with users through secure and transparent data practices.
                    </StyledC.Supportingtext13>
                  </StyledC.Div38>
                </StyledC.Featuretext10>
              </StyledC.Column6>
            </StyledC.Div34>
          </StyledC.Div33>
        </StyledC.Div23>
      </StyledC.FeaturesForCompanies>
      <StyledC.HowitWorks>
        <StyledC.Container2>
          <StyledC.Content2>
            <StyledC.Headingandsupportingtext>
              <StyledC.Div39>
                <StyledC.Headingandbadge>
                  <StyledC.Badgegroup3>
                    <div>
                      <div>HOW IT WORKS</div>
                    </div>
                  </StyledC.Badgegroup3>
                  <StyledC.Heading4>
                    Simple to use. <br />
                    Get started in few easy steps.
                  </StyledC.Heading4>
                </StyledC.Headingandbadge>
                <StyledC.Supportingtext14>
                  VaultKit simplifies data management and sharing, ensuring information is always
                  secure and easy to control.
                </StyledC.Supportingtext14>
              </StyledC.Div39>
              <StyledC.Div40>
                <StyledC.Div41>
                  <StyledC.Div42>
                    <StyledC.Heading5>01</StyledC.Heading5>
                    <StyledC.Heading6>Request Data</StyledC.Heading6>
                    <StyledC.Supportingtext15>
                      Companies send data requests to users via email.
                    </StyledC.Supportingtext15>
                  </StyledC.Div42>
                </StyledC.Div41>
                <StyledC.Div43>
                  <StyledC.Heading7>02</StyledC.Heading7>
                </StyledC.Div43>
                <StyledC.Div44>
                  <StyledC.Heading8>03</StyledC.Heading8>
                </StyledC.Div44>
                <StyledC.Div45>
                  <StyledC.Heading9>04</StyledC.Heading9>
                </StyledC.Div45>
              </StyledC.Div40>
            </StyledC.Headingandsupportingtext>
          </StyledC.Content2>
        </StyledC.Container2>
      </StyledC.HowitWorks>
      <StyledC.Pricingsection>
        <StyledC.Headersection>
          <StyledC.Container3>
            <StyledC.Content3>
              <StyledC.Headingandsupportingtext2>
                <StyledC.Headingandsubheading>
                  <StyledC.Badgegroup4>
                    <div>
                      <div>Pricing</div>
                    </div>
                  </StyledC.Badgegroup4>
                  <StyledC.Heading10>
                    Pick a Plan,{' '}
                    <StyledC.VerifiedText fontWeight="600">Any Plan!</StyledC.VerifiedText>
                  </StyledC.Heading10>
                </StyledC.Headingandsubheading>
                <StyledC.Supportingtext16>
                  Choose from our pricing options, the plan that best suits your needs.
                </StyledC.Supportingtext16>
              </StyledC.Headingandsupportingtext2>
            </StyledC.Content3>
          </StyledC.Container3>
        </StyledC.Headersection>
        <StyledC.Section>
          <StyledC.Container4>
            <StyledC.Content4>
              <StyledC.Pricingtiercard>
                <StyledC.Header2>
                  <StyledC.Price>Free</StyledC.Price>
                  <StyledC.Headingandsupportingtext3>Basic plan</StyledC.Headingandsupportingtext3>
                </StyledC.Header2>
                <StyledC.Content5>
                  <StyledC.Checkitems>
                    <StyledC.Checkitemtext>
                      <StyledC.Img17
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text13>Safe data storage.</StyledC.Text13>
                    </StyledC.Checkitemtext>
                    <StyledC.Checkitemtext2>
                      <StyledC.Img18
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text14>Simple sharing.</StyledC.Text14>
                    </StyledC.Checkitemtext2>
                    <StyledC.Checkitemtext3>
                      <StyledC.Img19
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text15>Basic permission settings.</StyledC.Text15>
                    </StyledC.Checkitemtext3>
                    <StyledC.Checkitemtext4>
                      <StyledC.Img20
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text16>Share data anywhere. </StyledC.Text16>
                    </StyledC.Checkitemtext4>
                    <StyledC.Checkitemtext5>
                      <StyledC.Img21
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text17>Privacy and security.</StyledC.Text17>
                    </StyledC.Checkitemtext5>
                  </StyledC.Checkitems>
                </StyledC.Content5>
                <StyledC.Footer>
                  <StyledC.Actions3>
                    <StyledC.Button12>
                      <StyledC.Buttonbase12>Get started</StyledC.Buttonbase12>
                    </StyledC.Button12>
                  </StyledC.Actions3>
                </StyledC.Footer>
              </StyledC.Pricingtiercard>
              <div>
                <StyledC.Header3>
                  <div>$15/mth</div>
                  <StyledC.Headingandsupportingtext4>
                    VaultKit Pro
                  </StyledC.Headingandsupportingtext4>
                </StyledC.Header3>
                <StyledC.Content6>
                  <div>
                    <div>
                      <StyledC.Img22
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text18>Everything in Basic.</StyledC.Text18>
                    </div>
                    <StyledC.Checkitemtext7>
                      <StyledC.Img23
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text19>Advanced sharing options.</StyledC.Text19>
                    </StyledC.Checkitemtext7>
                    <StyledC.Checkitemtext8>
                      <StyledC.Img24
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text20>Detailed permissions.</StyledC.Text20>
                    </StyledC.Checkitemtext8>
                    <StyledC.Checkitemtext9>
                      <StyledC.Img25
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text21>Quick responses to data requests.</StyledC.Text21>
                    </StyledC.Checkitemtext9>
                    <StyledC.Checkitemtext10>
                      <StyledC.Img26
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text22>Data usage insights.</StyledC.Text22>
                    </StyledC.Checkitemtext10>
                  </div>
                </StyledC.Content6>
                <div>
                  <StyledC.Actions4>
                    <StyledC.Button13>
                      <StyledC.Buttonbase13>Get started</StyledC.Buttonbase13>
                    </StyledC.Button13>
                  </StyledC.Actions4>
                </div>
              </div>
              <div>
                <StyledC.Header4>
                  <div>$30/mth</div>
                  <StyledC.Headingandsupportingtext5>
                    VaultKit Enterprise
                  </StyledC.Headingandsupportingtext5>
                </StyledC.Header4>
                <StyledC.Content7>
                  <div>
                    <div>
                      <StyledC.Img27
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text23>Everything in Pro.</StyledC.Text23>
                    </div>
                    <StyledC.Checkitemtext12>
                      <StyledC.Img28
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text24>Priority support.</StyledC.Text24>
                    </StyledC.Checkitemtext12>
                    <StyledC.Checkitemtext13>
                      <StyledC.Img29
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text25>Custom integrations.</StyledC.Text25>
                    </StyledC.Checkitemtext13>
                    <StyledC.Checkitemtext14>
                      <StyledC.Img30
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text26>Manage lots of data easily.</StyledC.Text26>
                    </StyledC.Checkitemtext14>
                    <StyledC.Checkitemtext15>
                      <StyledC.Img31
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                      />
                      <StyledC.Text27>Multiple data accounts.</StyledC.Text27>
                    </StyledC.Checkitemtext15>
                  </div>
                </StyledC.Content7>
                <div>
                  <StyledC.Actions5>
                    <StyledC.Button14>
                      <StyledC.Buttonbase14>Get started</StyledC.Buttonbase14>
                    </StyledC.Button14>
                  </StyledC.Actions5>
                </div>
              </div>
            </StyledC.Content4>
          </StyledC.Container4>
        </StyledC.Section>
      </StyledC.Pricingsection>
      <StyledC.FaQsection>
        <StyledC.Div46>
          <StyledC.Container5>
            <StyledC.Content8>
              <StyledC.Headingandsupportingtext6>
                <StyledC.Badgegroup5>
                  <div>
                    <div>FAQs</div>
                  </div>
                </StyledC.Badgegroup5>
                <StyledC.Heading11>You’ve got questions?</StyledC.Heading11>
                <StyledC.Supportingtext17>
                  Here’s everything you need to know about VaultKit.
                </StyledC.Supportingtext17>
              </StyledC.Headingandsupportingtext6>
            </StyledC.Content8>
          </StyledC.Container5>
          <StyledC.Container6>
            <StyledC.Content9>
              <StyledC.FaQitem>
                <StyledC.Content10>
                  <StyledC.Div47>
                    <StyledC.Text28>What is VaultKit?</StyledC.Text28>
                    <StyledC.Supportingtext18>
                      VaultKit is your trusty sidekick for safely managing and sharing your personal
                      data.
                    </StyledC.Supportingtext18>
                  </StyledC.Div47>
                  <StyledC.Iconwrap>
                    <StyledC.Img32
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6c60614bd85405978ccdccb1ba521856495c2763583e086e8be6cceb6c335a5?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </StyledC.Iconwrap>
                </StyledC.Content10>
              </StyledC.FaQitem>
              <StyledC.FaQitem2>
                <StyledC.Divider />
                <StyledC.Content11>
                  <StyledC.Div48>
                    <StyledC.Text29>How do I share my data with an organization?</StyledC.Text29>
                  </StyledC.Div48>
                  <div>
                    <StyledC.Img33
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b1546b6784acd8ac1f2cbea74c0535c094768c4ad4475596c29720dcfc85f7?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </div>
                </StyledC.Content11>
              </StyledC.FaQitem2>
              <StyledC.FaQitem3>
                <div />
                <StyledC.Content12>
                  <StyledC.Div49>
                    <StyledC.Text30>Is my data secure with VaultKit?</StyledC.Text30>
                  </StyledC.Div49>
                  <div>
                    <StyledC.Img34
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b1546b6784acd8ac1f2cbea74c0535c094768c4ad4475596c29720dcfc85f7?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </div>
                </StyledC.Content12>
              </StyledC.FaQitem3>
              <StyledC.FaQitem4>
                <div />
                <StyledC.Content13>
                  <StyledC.Div50>
                    <StyledC.Text31>Can I control who accesses my data?</StyledC.Text31>
                  </StyledC.Div50>
                  <div>
                    <StyledC.Img35
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b1546b6784acd8ac1f2cbea74c0535c094768c4ad4475596c29720dcfc85f7?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </div>
                </StyledC.Content13>
              </StyledC.FaQitem4>
              <StyledC.FaQitem5>
                <div />
                <StyledC.Content14>
                  <StyledC.Div51>
                    <StyledC.Text32>
                      What happens if I receive a data request but I&apos;m not on VaultKit?
                    </StyledC.Text32>
                  </StyledC.Div51>
                  <div>
                    <StyledC.Img36
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b1546b6784acd8ac1f2cbea74c0535c094768c4ad4475596c29720dcfc85f7?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </div>
                </StyledC.Content14>
              </StyledC.FaQitem5>
              <StyledC.FaQitem6>
                <div />
                <StyledC.Content15>
                  <StyledC.Div52>
                    <StyledC.Text33>Can I analyze how my data is being used?</StyledC.Text33>
                  </StyledC.Div52>
                  <div>
                    <StyledC.Img37
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b1546b6784acd8ac1f2cbea74c0535c094768c4ad4475596c29720dcfc85f7?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                    />
                  </div>
                </StyledC.Content15>
              </StyledC.FaQitem6>
            </StyledC.Content9>
          </StyledC.Container6>
        </StyledC.Div46>
        <StyledC.Container7>
          <StyledC.Content16>
            <StyledC.Headingandsupportingtext7>
              <StyledC.Heading12>Still got questions?</StyledC.Heading12>
              <StyledC.Supportingtext19>Get in touch with us.</StyledC.Supportingtext19>
            </StyledC.Headingandsupportingtext7>
            <StyledC.Actions6>
              <StyledC.Button15>
                <StyledC.Buttonbase15>Get in touch</StyledC.Buttonbase15>
              </StyledC.Button15>
            </StyledC.Actions6>
          </StyledC.Content16>
        </StyledC.Container7>
      </StyledC.FaQsection>
      <StyledC.Footer4>
        <StyledC.Container8>
          <StyledC.Content17>
            <StyledC.Logoandlinks>
              <StyledC.Logoandsupportingtext>
                <StyledC.Logo>
                  <StyledC.Img38
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5afaf4fa94477a45e8eb28bb379cfa49da098076c9dbd8ad46cd31a93b0dd24c?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                  />
                </StyledC.Logo>
                <StyledC.Supportingtext20>Your data, your rules. </StyledC.Supportingtext20>
              </StyledC.Logoandsupportingtext>
              <StyledC.Footerlinks>
                <StyledC.Footerlink>
                  <div>
                    <StyledC.Buttonbase16>Home</StyledC.Buttonbase16>
                  </div>
                </StyledC.Footerlink>
                <div>
                  <div>
                    <StyledC.Buttonbase17>Features</StyledC.Buttonbase17>
                  </div>
                </div>
                <StyledC.Footerlink3>
                  <div>
                    <StyledC.Buttonbase18>How it Works</StyledC.Buttonbase18>
                  </div>
                </StyledC.Footerlink3>
                <div>
                  <div>
                    <StyledC.Buttonbase19>Pricing</StyledC.Buttonbase19>
                  </div>
                </div>
                <div>
                  <div>
                    <StyledC.Buttonbase20>FAQs</StyledC.Buttonbase20>
                  </div>
                </div>
                <StyledC.Footerlink6>
                  <div>
                    <div />
                  </div>
                </StyledC.Footerlink6>
              </StyledC.Footerlinks>
            </StyledC.Logoandlinks>
            <StyledC.Appstoreactions>
              <StyledC.Heading13>Get Started</StyledC.Heading13>
              <StyledC.Actions7>
                <StyledC.Button22>
                  <StyledC.Buttonbase22>Request Demo</StyledC.Buttonbase22>
                </StyledC.Button22>
                <StyledC.Button23>
                  <StyledC.Buttonbase23>Get started</StyledC.Buttonbase23>
                </StyledC.Button23>
              </StyledC.Actions7>
            </StyledC.Appstoreactions>
          </StyledC.Content17>
        </StyledC.Container8>
        <StyledC.Container9>
          <StyledC.Divider6 />
          <StyledC.Content18>© 2024 VaultKit. All rights reserved.</StyledC.Content18>
        </StyledC.Container9>
      </StyledC.Footer4>
    </Box>
  </StyledC.LandingPageDesktop>
);

export default LandingViewTwo;
