'use strict'

module.exports.create_note=async (event) => {
  return {

    let data =JSON.parse(event.body);
    try{
      const params = {
        TableName: notesTable,
        Item: {
          id: data.id,
          title: data.title,
          content: data.content,
          attachment: data.attachment,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      };
      await dynamoDb.put(params).promise();
    }
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "taht lambda worked",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.get_note=async (event) => {
  let notesId=event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "lambda for get notes worked"+notesId+"",
        input: event,
      },
      null,
      2
    ),
  };
}

module.exports.update_note=async (event) => {
  let notesId=event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "lambda for update notes worked",
        input: event,
      },
      null,
      2
    ),
  };
}

module.exports.delete_note=async (event) => {
  let notesId=event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "lambda for delete notes worked",
        input: event,
      },
      null,
      2
    ),
  };
}

