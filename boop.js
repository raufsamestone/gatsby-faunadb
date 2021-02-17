require("dotenv").config();
const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_DB });

const COLLECTION_NAME = process.env.GATSBY_FAUNA_COLLECTION;

module.exports = {
  createComment: async () => {
    const slug = "/posts/some-post"
    const name = "some name"
    const comment = "some comment"
    const results = await client.query(
      q.Create(q.Collection(COLLECTION_NAME), {
        data: {
          isApproved: false,
          slug: slug,
          date: new Date().toString(),
          name: name,
          comment: comment,
        },
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      commentId: results.ref.id,
    }
  },
  deleteCommentById: async () => {
    const commentId = "263413122555970050";
    const results = await client.query(
      q.Delete(q.Ref(q.Collection(COLLECTION_NAME), commentId))
    );
    console.log(JSON.stringify(results, null, 2));
    return {
      commentId: results.ref.id,
    };
  },
 getAllComments: async () => {
   const results = await client.query(
     q.Paginate(q.Match(q.Index("get-all-comments")))
   );
   console.log(JSON.stringify(results, null, 2));
   return results.data.map(([ref, isApproved, slug, date, name, comment]) => ({
     commentId: ref.id,
     isApproved,
     slug,
     date,
     name,
     comment,
   }));
 },
 getCommentsBySlug: async () => {
  const slug = "/posts/some-post";
  const results = await client.query(
    q.Paginate(q.Match(q.Index("get-comments-by-slug"), slug))
  );
  console.log(JSON.stringify(results, null, 2));
  return results.data.map(([ref, isApproved, slug, date, name, comment]) => ({
    commentId: ref.id,
    isApproved,
    slug,
    date,
    name,
    comment,
  }));
},
approveCommentById: async () => {
  const commentId = '263413122555970050'
  const results = await client.query(
    q.Update(q.Ref(q.Collection(COLLECTION_NAME), commentId), {
      data: {
        isApproved: true,
      },
    })
  );
  console.log(JSON.stringify(results, null, 2));
  return {
    isApproved: results.isApproved,
  };
},
};

require("make-runnable/custom")({
  printOutputFrame: false,
});
