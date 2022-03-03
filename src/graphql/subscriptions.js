/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateMsg = /* GraphQL */ `
  subscription OnUpdateMsg {
    onUpdateMsg {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
