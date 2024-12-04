import React from 'react';

import * as StyledC from './LandingStyled';

const pricingList = [
    {
        title: 'Free',
        subText: 'Basic plan',
        features: [
            "Safe data storage",
            "Simple sharing",
            "Basic permission settings",
            "Share data anywhere",
            "Privacy and security"
          ]
    },
    {
        title: '$15/mth',
        subText: 'VaultKit Pro',
        features: [
            "Everything in Basic",
            "Advanced sharing options",
            "Detailed permissions",
            "Quick responses to data requests",
            "Data usage insights"
          ]
    },
    {
        title: '$30/mth',
        subText: 'VaultKit Pro',
        features: [
            "Everything in Pro",
            "Priority support",
            "Custom integrations",
            "Manage lots of data easily",
            "Multiple data accounts"
          ]
    },
]
const PricingSection = () => {
    console.log('pricing');
  return (
    <StyledC.Pricingsection>
    <StyledC.Headersection>
      <StyledC.Container3>
        <StyledC.Content3>
          <StyledC.Headingandsupportingtext2>
            <StyledC.Headingandsubheading>
              <StyledC.Badgegroup4>
                Pricing
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
        {pricingList.map(card => (
          <StyledC.Pricingtiercard>
            <StyledC.Header2>
              <StyledC.Price>{card.title}</StyledC.Price>
              <StyledC.Headingandsupportingtext3>{card.subText}</StyledC.Headingandsupportingtext3>
            </StyledC.Header2>
            <StyledC.Content5>
                {card.features.map(f => (
                    <StyledC.Checkitems>
                        <StyledC.Checkitemtext>
                        <StyledC.Img17
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e7c43fefd34645897a6ef6276064533e532c1443c12692cc04ffa336b5406d?placeholderIfAbsent=true&apiKey=6483acdfc6da4ff985675f9a2a9848f4"
                        />
                        <StyledC.Text13>{f}</StyledC.Text13>
                        </StyledC.Checkitemtext>
                        
                    </StyledC.Checkitems>

                ))}
            </StyledC.Content5>
            <StyledC.Footer>
              <StyledC.Actions3>
                <StyledC.Button12>
                  <StyledC.Buttonbase12>Get started</StyledC.Buttonbase12>
                </StyledC.Button12>
              </StyledC.Actions3>
            </StyledC.Footer>
          </StyledC.Pricingtiercard>

        ))}
          
        
          
        </StyledC.Content4>
      </StyledC.Container4>
    </StyledC.Section>
  </StyledC.Pricingsection>
  )
}

export default PricingSection
