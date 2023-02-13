export const getShortCommentText = (commentText: string) => {
  if (commentText.length > 100) {
    return commentText.split("").splice(0, 100).join("") + "...";
  }

  return commentText;
};
