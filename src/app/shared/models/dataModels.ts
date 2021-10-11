export interface VideoData {
  kind: string;
  etag: string;
  id: { [k: string]: string };
  snippet: {
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    channelTitle: string;
    tags: [
      string
    ];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string
    };
    defaultAudioLanguage: string
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: [
        string
      ];
      blocked: [
        string
      ]
    };
    contentRating: {
      acbRating: string;
      agcomRating: string;
      anatelRating: string;
      bbfcRating: string;
      bfvcRating: string;
      bmukkRating: string;
      catvRating: string;
      catvfrRating: string;
      cbfcRating: string;
      cccRating: string;
      cceRating: string;
      chfilmRating: string;
      chvrsRating: string;
      cicfRating: string;
      cnaRating: string;
      cncRating: string;
      csaRating: string;
      cscfRating: string;
      czfilmRating: string;
      djctqRating: string;
      ecbmctRating: string;
      eefilmRating: string;
      egfilmRating: string;
      eirinRating: string;
      fcbmRating: string;
      fcoRating: string;
      fmocRating: string;
      fpbRating: string;
      fskRating: string;
      grfilmRating: string;
      icaaRating: string;
      ifcoRating: string;
      ilfilmRating: string;
      incaaRating: string;
      kfcbRating: string;
      kijkwijzerRating: string;
      kmrbRating: string;
      lsfRating: string;
      mccaaRating: string;
      mccypRating: string;
      mcstRating: string;
      mdaRating: string;
      medietilsynetRating: string;
      mekuRating: string;
      mibacRating: string;
      mocRating: string;
      moctwRating: string;
      mpaaRating: string;
      mpaatRating: string;
      mtrcbRating: string;
      nbcRating: string;
      nbcplRating: string;
      nfrcRating: string;
      nfvcbRating: string;
      nkclvRating: string;
      oflcRating: string;
      pefilmRating: string;
      rcnofRating: string;
      resorteviolenciaRating: string;
      rtcRating: string;
      rteRating: string;
      russiaRating: string;
      skfilmRating: string;
      smaisRating: string;
      smsaRating: string;
      tvpgRating: string;
      ytRating: string
    };
    projection: string;
    hasCustomThumbnail: boolean
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean
  };
  topicDetails: {
    topicIds: [
      string
    ];
    relevantTopicIds: [
      string
    ];
    topicCategories: [
      string
    ]
  };
  suggestions: {
    processingErrors: [
      string
    ];
    processingWarnings: [
      string
    ];
    processingHints: [
      string
    ];
    tagSuggestions: [
      {
        tag: string;
        categoryRestricts: [
          string
        ]
      }
    ];
    editorSuggestions: [
      string
    ]
  };
}

export interface CommentData {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface CommentRawData {
  kind: string;
  etag:  string;
  id: string,
  snippet: {
    channelId: string,
    videoId: string,
    topLevelComment: {
      snippet: CommentData;
    }
  },
}
