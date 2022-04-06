const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    createdDate: String
    fullName: String
    email: String
    password: String
    business: [Business]!
  }

  type Business {
    _id: ID
    createdDate: String
    name: String
    description: String
    owner: String
    category: String
    experience: [Experience]!
    avgScore: Int
    reviews: [Review]!
  }

  type Experience {
    _id: ID
    workType: String
    workDescription: String
    workImages: [String]
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    reviewScore: Int
    createdDate: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    userById(userId: ID!): User
    userByEmail(userEmail: String): User
    businesses(fullName: String): [Business]
    businessesCategory(category: String): [Business]
    businessByName(name: String!): Business
    businessById(businessId: ID!): Business
    me: User
  }

  type Mutation {
    addUser(fullName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBusiness(
      id: String!
      name: String!
      description: String!
      category: String!
    ): Business
    addReview(businessId: ID!, reviewText: String!, reviewScore: Int!): Business
    addExperience(
      businessId: ID!
      workType: String!
      workDescription: String!
    ): Business
    removeBusiness(businessId: ID!): Business
    removeReview(businessId: ID!, reviewId: ID!): Business
    removeExperience(businessId: ID!, experienceId: ID!): Business
  }
`;

module.exports = typeDefs;
