import React from 'react';

import { Box } from '@mui/material';

import Header from 'src/layouts/main/Header';

import HeroSection from './Hero-view';
import * as StyledC from './LandingStyled';
import FeatureSection from './Features-Section';
import HowItWorksSection from './HowItWorksSection';
import CompanyFeaturesSection from './Company-Features-Section';


const LandingViewTwo = () => (
  <StyledC.LandingPageDesktop>
    <Box>
      <Header />
    </Box>

    <Box>
     <HeroSection />
      <FeatureSection />
     <CompanyFeaturesSection />
  <HowItWorksSection />
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
