/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
      id
      chatRoom
      chatRoomUserEmails
      messages {
        id
        message
        sendBy
        date
      }
      updatedAt
    }
  }
`;
export const getChatUsers = /* GraphQL */ `
  query GetChatUsers($username: String!) {
    getChatUsers(username: $username) {
      id
      chatRoom
      chatRoomUserEmails
      updatedAt
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      title
      isbn
      city
      authorName
      uploadedBy
      description
      price
      imageKey
      slug
      email
      ownerName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        isbn
        city
        authorName
        uploadedBy
        description
        price
        imageKey
        slug
        email
        ownerName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
