import type { RelativeItem } from 'react-native-relatives-tree';

export interface RelativeDataType extends RelativeItem {
  name: string;
  dob: string;
  dod?: string;
  profile: string;
  order?: number;
  spouse?: RelativeDataType;
}

const relatives: RelativeDataType[] = [
  {
    name: 'John',
    spouse: {
      name: 'Anne',
      spouse: undefined,
      dob: '04/05/2007',
      dod: undefined,
      order: 1,
      profile:
        'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    },
    dob: '01/05/2004',
    dod: undefined,
    profile:
      'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    children: [
      {
        name: 'Dan',
        spouse: {
          name: 'Ella',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
          order: 1,
          profile:
            'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        dob: '01/05/2004',
        dod: undefined,
        order: 1,
        profile:
          'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        children: [
          {
            name: 'Olivia',
            spouse: undefined,
            dob: '01/05/2004',
            dod: undefined,
            order: 1,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            name: 'Mary',
            spouse: undefined,
            dob: '01/05/2004',
            dod: undefined,
            order: 2,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            name: 'Alen',
            spouse: undefined,
            dob: '01/05/2004',
            dod: undefined,
            order: 3,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
        ],
      },
      {
        name: 'ArokiyaRaj',
        spouse: {
          name: 'Muthu',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
          order: 1,
          profile:
            'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        dob: '01/05/2004',
        dod: '03/03/2017',
        order: 2,
        profile:
          'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        children: [
          {
            name: 'Edwin',
            spouse: {
              name: 'AmalaDoss',
              spouse: undefined,
              dob: '04/05/2007',
              dod: undefined,
              order: 1,
              profile:
                'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            },
            dob: '01/05/2004',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            children: [
              {
                name: 'Thiya',
                spouse: undefined,
                dob: '03/03/2019',
                dod: undefined,
                profile:
                  'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                order: 1,
              },
              {
                name: 'Riya',
                spouse: undefined,
                dob: '03/03/2019',
                dod: undefined,
                profile:
                  'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                order: 1,
              },
            ],
          },
          {
            name: 'Imaculate',
            spouse: {
              name: 'Jerone',
              spouse: undefined,
              dob: '04/05/2007',
              dod: undefined,
              order: 1,
              profile:
                'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            },
            dob: '03/03/1995',
            dod: undefined,
            order: 2,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            children: [
              {
                name: 'BoyBaby',
                spouse: undefined,
                dob: '03/03/2018',
                dod: undefined,
                profile:
                  'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                order: 1,
              },
            ],
          },
          {
            name: 'Peter Remijius',
            spouse: undefined,
            dob: '03/03/1995',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 3,
          },
        ],
      },
      {
        name: 'Leema Rose Mary',
        spouse: {
          name: 'Jerone',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
          order: 1,
          profile:
            'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        dob: '01/05/2004',
        dod: undefined,
        order: 3,
        profile:
          'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        children: [
          {
            name: 'Leena Gracy',
            spouse: {
              name: 'Pugalarasan',
              spouse: undefined,
              dob: '04/05/2007',
              dod: undefined,
              order: 1,
              profile:
                'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            },
            dob: '01/05/2004',
            dod: undefined,
            order: 1,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            children: [
              {
                name: 'Shetric Kavin',
                spouse: undefined,
                dob: '01/05/2004',
                dod: undefined,
                profile:
                  'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                order: 1,
              },
              {
                name: 'Magilan',
                spouse: undefined,
                dob: '03/03/2018',
                dod: undefined,
                profile:
                  'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                order: 1,
              },
            ],
          },
          {
            name: 'Prashanth',
            spouse: {
              name: 'Melvin',
              spouse: undefined,
              dob: '04/05/2007',
              dod: undefined,
              order: 1,
              profile:
                'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            },
            dob: '01/05/2004',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 2,
          },
        ],
      },
      {
        name: 'ChristhuRaj',
        spouse: {
          name: 'Rubisa',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
          order: 1,
          profile:
            'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        dob: '01/05/2004',
        dod: undefined,
        order: 4,
        profile:
          'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        children: [
          {
            name: 'Melvin Manoj',
            spouse: undefined,
            dob: '03/03/2001',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 1,
          },
          {
            name: 'Magilan',
            spouse: undefined,
            dob: '03/03/2002',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 2,
          },
        ],
      },
      {
        name: 'Gunaseeli',
        spouse: {
          name: 'Anburose',
          spouse: undefined,
          dob: '04/05/2007',
          dod: undefined,
          order: 1,
          profile:
            'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        dob: '06/01/1975',
        dod: undefined,
        order: 5,
        profile:
          'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        children: [
          {
            name: 'Johncy Arul',
            spouse: undefined,
            dob: '01/08/1997',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 1,
          },
          {
            name: 'Althumas',
            spouse: undefined,
            dob: '24/12/1999',
            dod: undefined,
            profile:
              'https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            order: 2,
          },
        ],
      },
    ],
  },
];

export default relatives;
