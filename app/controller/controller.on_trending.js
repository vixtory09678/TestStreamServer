


exports.getOnTrendingLive = async (req, res) => {
  const live_list = [
      1124122,
      1221532,
      6632212,
      6565241
  ]
  res.json(live_list)
}

exports.getOnTrendingCommunity = async (req, res) => {
  const community_list = [
      4567862,
      1257788,
      8535123,
      9966786
  ]
  res.json(community_list)
}

exports.getOnTrendingPost = async (req, res) => {
  const post_list = [
      4455662,
      1235023,
      1885444,
      1238854
  ]
  res.json(post_list)
}