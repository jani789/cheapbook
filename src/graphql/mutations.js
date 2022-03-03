/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateChat = /* GraphQL */ `
  mutation UpdateChat($input: UpdateChatInput!) {
    updateChat(input: $input) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
