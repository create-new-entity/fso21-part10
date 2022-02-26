import { RepositoryListContainer } from '../../components/RepositoryList';
import { render, within } from '@testing-library/react-native';


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const formattedRepos = repositories.edges.map(edgeObj => {
        return {
          id: edgeObj.node.id,
          fullName: edgeObj.node.fullName,
          description: edgeObj.node.description,
          language: edgeObj.node.language,
          forksCount: edgeObj.node.forksCount,
          stargazersCount: edgeObj.node.stargazersCount,
          ratingAverage: edgeObj.node.ratingAverage,
          reviewCount: edgeObj.node.reviewCount,
          ownerAvatarUrl: edgeObj.node.ownerAvatarUrl
        };
      });
      
      const { getAllByTestId } = render(<RepositoryListContainer repositories={formattedRepos}/>);
      const [firstComp, secondComp] = getAllByTestId('repositoryItem');
      
      expect(firstComp).toHaveTextContent(repositories.edges[0].node.fullName);
      expect(firstComp).toHaveTextContent(repositories.edges[0].node.description);
      expect(firstComp).toHaveTextContent(repositories.edges[0].node.language);
      expect(within(firstComp).getByText('21.9k')).toHaveTextContent('21.9k');
      expect(within(firstComp).getByText('1.6k')).toHaveTextContent('1.6k');
      expect(within(firstComp).getByText('' + repositories.edges[0].node.ratingAverage)).toHaveTextContent(repositories.edges[0].node.ratingAverage);
      expect(within(firstComp).getByText('' + repositories.edges[0].node.reviewCount)).toHaveTextContent(repositories.edges[0].node.reviewCount);

      expect(secondComp).toHaveTextContent(repositories.edges[1].node.fullName);
      expect(secondComp).toHaveTextContent(repositories.edges[1].node.description);
      expect(secondComp).toHaveTextContent(repositories.edges[1].node.language);
      expect(within(secondComp).getByText('1.8k')).toHaveTextContent('1.8k');
      expect(within(secondComp).getByText('69')).toHaveTextContent('69');
      expect(within(secondComp).getByText('' + repositories.edges[1].node.ratingAverage)).toHaveTextContent(repositories.edges[1].node.ratingAverage);
      expect(within(secondComp).getByText('' + repositories.edges[1].node.reviewCount)).toHaveTextContent(repositories.edges[1].node.reviewCount);
    });
  });
});