'use strict'

module.exports.create_note=async (event) => {
  return {
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
        message: "lambda for get notes worked",
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

