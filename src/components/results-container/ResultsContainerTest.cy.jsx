/// <reference types="Cypress" />
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsContainer from './ResultsContainer';

describe('ResultsContainer', () => {
  const mockFiltersData = {
    isLoading: false,
    data: [
      {
        filterId: 'star_ratings',
        title: 'Star ratings',
        filters: [
          {
            id: '5_star_rating',
            title: '5 Star',
          },
          {
            id: '4_star_rating',
            title: '4 Star',
          },
          {
            id: '3_star_rating',
            title: '3 Star',
          },
        ],
      },
      {
        filterId: 'propety_type',
        title: 'Property type',
        filters: [
          {
            id: 'prop_type_hotel',
            title: 'Hotel',
          },
          {
            id: 'prop_type_apartment',
            title: 'Apartment',
          },
          {
            id: 'prop_type_villa',
            title: 'Villa',
          },
        ],
      },
    ],
  };

  const mockHotelsResults = {
    isLoading: false,
    data: [
      {
        hotelCode: 71222,
        images: [
          {
            imageUrl: '/images/hotels/481481762/481481762.jpg',
            accessibleText: 'hyatt grand central new york',
          },
          {
            imageUrl: '/images/hotels/481481762/525626081.jpg',
            accessibleText: 'hyatt grand central new york',
          },
          {
            imageUrl: '/images/hotels/481481762/525626095.jpg',
            accessibleText: 'hyatt grand central new york',
          },
          {
            imageUrl: '/images/hotels/481481762/525626104.jpg',
            accessibleText: 'hyatt grand central new york',
          },
          {
            imageUrl: '/images/hotels/481481762/525626212.jpg',
            accessibleText: 'hyatt grand central new york',
          },
        ],
        title: 'Hyatt Grand Central New York',
        subtitle: 'Midtown East, New York, NY 10017, United States',
        benefits: [
          'Free cancellation',
          'No prepayment needed – pay at the property',
        ],
        price: '225',
        ratings: '5',
        city: 'new york',
        reviews: {
          data: [
            {
              reviewerName: 'Rahul Patel',
              rating: 5,
              review:
                'The hotel is very good and the staff is very friendly. The food is also very good.',
              date: 'Date of stay: 2021-01-01',
              verified: true,
            },
            {
              reviewerName: 'Sara Johnson',
              rating: 4,
              review:
                'Great hotel with excellent service. The rooms are spacious and clean. The staff went above and beyond to ensure a comfortable stay. Highly recommended!',
              date: 'Date of stay: 2021-02-15',
              verified: false,
            },
            {
              reviewerName: 'John Smith',
              rating: 3,
              review: 'Average hotel. The staff could be more attentive.',
              date: 'Date of stay: 2021-03-10',
              verified: true,
            },
            {
              reviewerName: 'Emily Davis',
              rating: 5,
              review: 'Amazing experience! The hotel exceeded my expectations.',
              date: 'Date of stay: 2021-04-20',
              verified: false,
            },
            {
              reviewerName: 'David Wilson',
              rating: 1,
              review:
                'Terrible experience. The hotel was dirty and the staff was rude.',
              date: 'Date of stay: 2021-05-05',
              verified: true,
            },
            {
              reviewerName: 'Jessica Thompson',
              rating: 4,
              review:
                'Lovely hotel with a great location. The staff was friendly and helpful.',
              date: 'Date of stay: 2021-06-12',
              verified: false,
            },
            {
              reviewerName: 'Michael Brown',
              rating: 2,
              review:
                'Disappointing stay. The room was not clean and the service was slow.',
              date: 'Date of stay: 2021-07-20',
              verified: true,
            },
            {
              reviewerName: 'Sophia Lee',
              rating: 5,
              review:
                'Exceptional service and beautiful rooms. The staff was incredibly friendly and attentive. The amenities provided were top-notch. Overall, a truly memorable experience!',
              date: 'Date of stay: 2021-08-05',
              verified: false,
            },
            {
              reviewerName: 'Daniel Johnson',
              rating: 3,
              review:
                'Decent hotel with average facilities. The staff was polite and helpful. However, the room could have been cleaner. It was an okay stay overall.',
              date: 'Date of stay: 2021-09-10',
              verified: true,
            },
            {
              reviewerName: 'Olivia Wilson',
              rating: 4,
              review:
                'Enjoyed my stay at the hotel. The room was comfortable and the staff was friendly.',
              date: 'Date of stay: 2021-10-15',
              verified: false,
            },
            {
              reviewerName: 'Ethan Davis',
              rating: 4,
              review:
                'Fantastic hotel with great amenities. The staff was attentive and helpful.',
              date: 'Date of stay: 2021-11-20',
              verified: true,
            },
            {
              reviewerName: 'Ava Smith',
              rating: 2,
              review:
                'Not satisfied with the hotel. The room was small and the service was poor.',
              date: 'Date of stay: 2021-12-05',
              verified: false,
            },
            {
              reviewerName: 'Mia Johnson',
              rating: 4,
              review:
                'Had a pleasant stay at the hotel. The location was convenient and the staff was friendly.',
              date: 'Date of stay: 2022-01-10',
              verified: true,
            },
            {
              reviewerName: 'Noah Wilson',
              rating: 3,
              review:
                'Average hotel with decent facilities. The staff was helpful.',
              date: 'Date of stay: 2022-02-15',
              verified: false,
            },
            {
              reviewerName: 'Liam Davis',
              rating: 4,
              review:
                'Outstanding hotel with top-notch service. The rooms were luxurious and comfortable.',
              date: 'Date of stay: 2022-03-20',
              verified: true,
            },
          ],
        },
      },
      {
        hotelCode: 81245,
        images: [
          {
            imageUrl: '/images/hotels/rc/tb.webp',
            accessibleText: 'The Broadmoor',
          },
        ],
        title: 'The Broadmoor',
        subtitle: 'Colorado Springs',
        benefits: ['Free wifi', 'Indoor pool', 'Fitness center', 'Luxury spa'],
        price: '850',
        ratings: '4.9',
        city: 'colorado springs',
      },
      {
        hotelCode: 81242,
        images: [
          {
            imageUrl: '/images/hotels/rc/ic.webp',
            accessibleText: 'InterContinental Los Angeles Downtown',
          },
        ],
        title: 'InterContinental Los Angeles Downtown',
        subtitle: 'Located in the Financial District',
        benefits: [
          'Outdoor pool',
          'Free wifi',
          'Business center',
          'Fitness center',
        ],
        price: '375',
        ratings: '4.6',
        city: 'los angeles',
      },
      {
        hotelCode: 81243,
        images: [
          {
            imageUrl: '/images/hotels/rc/hj.webp',
            accessibleText: 'Hotel Jerome, Aspen',
          },
        ],
        title: 'Hotel Jerome, Aspen',
        subtitle: 'Located in the heart of Aspen',
        benefits: ['Free wifi', 'Luxury spa', 'Fitness center', 'Indoor pool'],
        price: '890',
        ratings: '5.0',
        city: 'aspen',
      },
      {
        hotelCode: 81244,
        images: [
          {
            imageUrl: '/images/hotels/rc/tr.webp',
            accessibleText: 'The Ritz-Carlton, Half Moon Bay',
          },
        ],
        title: 'The Ritz-Carlton, Half Moon Bay',
        subtitle: 'Half Moon Bay, California',
        benefits: [
          'Outdoor pool',
          'Free wifi',
          'Pet-friendly',
          'Spa and wellness centre',
        ],
        price: '950',
        ratings: '4.8',
        city: 'half moon bay',
      },
    ],
  };

  const selectedFiltersState = mockFiltersData.data.map((filterGroup) => ({
    ...filterGroup,
    filters: filterGroup.filters.map((filter) => ({
      ...filter,
      isSelected: false,
    })),
  }));

  beforeEach(() => {
    // cy.intercept() to mock API responses
  });

  it('renders hotel view cards when not loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={false}
          filtersData={mockFiltersData}
        />
      </BrowserRouter>
    );

    cy.get('[data-testid=hotel-view-card]').should('have.length', 5);
  });

  it('renders hotel view card skeletons when loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={{ ...mockHotelsResults, isLoading: true }}
          enableFilters={false}
          filtersData={mockFiltersData}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=hotel-view-card-skeleton]').should('have.length', 5);
  });

  it('renders vertical filters when filters are enabled and not loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={{ ...mockFiltersData, isLoading: false }}
          selectedFiltersState={selectedFiltersState}
          onFiltersUpdate={() => {}}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=vertical-filters]').should('exist');
  });

  it('renders vertical filters skeleton when filters are enabled and loading', () => {
    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={{ ...mockFiltersData, isLoading: true }}
          selectedFiltersState={[]}
          onFiltersUpdate={() => {}}
        />
      </BrowserRouter>
    );
    cy.get('[data-testid=vertical-filters-skeleton]').should('exist');
  });

  it('calls onFiltersUpdate with correct arguments', () => {
    const onFiltersUpdateSpy = cy.spy().as('onFiltersUpdateSpy');

    cy.mount(
      <BrowserRouter>
        <ResultsContainer
          hotelsResults={mockHotelsResults}
          enableFilters={true}
          filtersData={mockFiltersData}
          onFiltersUpdate={onFiltersUpdateSpy}
          selectedFiltersState={selectedFiltersState}
        />
      </BrowserRouter>
    );

    cy.get('[data-testid=vertical-filters__toggle-menu]').click();

    cy.get('[data-testid=5_star_rating]').click();

    cy.get('@onFiltersUpdateSpy').should('have.been.calledWith', {
      filterId: 'star_ratings',
      id: '5_star_rating',
    });

    cy.get('[data-testid=4_star_rating]').click();

    cy.get('@onFiltersUpdateSpy').should('have.been.calledWith', {
      filterId: 'star_ratings',
      id: '4_star_rating',
    });
  });
});
