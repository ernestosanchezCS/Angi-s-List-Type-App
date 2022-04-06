import { gql } from "@apollo/client";

export const QUERY_USER_BY_ID = gql`
  query user($userId: ID!) {
    userById(userId: $userId) {
      _id
      fullName
      email
      business {
        _id
        category
      }
    }
  }
`;

export const QUERY_BUSINESSES = gql`
  query getBusinesses {
    businessEs {
      _id
      createdDate
      name
      description
      owner
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_BUSINESS = gql`
  query getSingleBusiness($businessId: ID!) {
    business(businessId: $businessId) {
      _id
      createdDate
      name
      description
      owner
      category {
        _id
        name
      }
      experience {
        _id
        workType
        workDescription
        workImages
      }
      avgScore
      reviews {
        _id
        reviewText
        reviewAuthor
        reviewScore
        createdDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      email
    }
  }
`;

/** For search results - handles shortcut to view business by category */
export const QUERY_BUSINESS_BY_CATEGORY = gql`
  query businessesCategory($category: String!) {
    businessesCategory(category: $category) {
      _id
      createdDate
      name
      description
      owner
      category
      avgScore
      experience {
        workType
        workDescription
      }
    }
  }
`;

/** View specific Business profile page */
export const QUERY_BUSINESS_BY_ID = gql`
  query businessById($businessId: ID!) {
    businessById(businessId: $businessId) {
      _id
      createdDate
      name
      description
      owner
      experience {
        workType
        workDescription
      }
      category
      avgScore
      reviews {
        reviewText
        reviewAuthor
        reviewScore
        createdDate
      }
    }
  }
`;
