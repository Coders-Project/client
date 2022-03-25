import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreatePostInput = {
  /** Raw generated by Draft.js */
  draftRaw?: InputMaybe<Scalars['String']>;
  isFollowOnly?: InputMaybe<Scalars['Boolean']>;
  postParentId?: InputMaybe<Scalars['Int']>;
};

export type CreatePostMediaInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreatePostMentionInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreatePostTagInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateTagInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type FeedInput = {
  page?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FeedOuput = {
  list: Array<Post>;
  total: Scalars['Int'];
};

export type FindAllPostOutput = {
  list: Array<Post>;
  total: Scalars['Int'];
};

export type FindAllUserInput = {
  page?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FindAllUserOutput = {
  total: Scalars['Int'];
  users: Array<User>;
};

export type FollowInput = {
  page?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FollowMutationOutput = {
  follower: User;
  following: User;
};

export type FollowOutput = {
  list: Array<User>;
  total: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  createPost: Post;
  createPostMedia: PostMedia;
  createPostMention: PostMention;
  createPostTag: PostTag;
  createTag: Tag;
  createUser: LoginOutput;
  removeFollower: RemoveFollowerOutput;
  removePost: Post;
  removePostMedia: PostMedia;
  removePostMention: PostMention;
  removePostTag: PostTag;
  removeTag: Tag;
  toggleFollow: FollowMutationOutput;
  updatePost: Post;
  updatePostMedia: PostMedia;
  updatePostMention: PostMention;
  updatePostTag: PostTag;
  updateSelf: User;
  updateTag: Tag;
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<CreatePostInput>;
  medias?: InputMaybe<Array<Scalars['Upload']>>;
};


export type MutationCreatePostMediaArgs = {
  createPostMediaInput: CreatePostMediaInput;
};


export type MutationCreatePostMentionArgs = {
  createPostMentionInput: CreatePostMentionInput;
};


export type MutationCreatePostTagArgs = {
  createPostTagInput: CreatePostTagInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationRemoveFollowerArgs = {
  followerId: Scalars['Int'];
};


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePostMediaArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePostMentionArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePostTagArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int'];
};


export type MutationToggleFollowArgs = {
  followingId: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  input?: InputMaybe<UpdatePostInput>;
  medias?: InputMaybe<Array<Scalars['Upload']>>;
};


export type MutationUpdatePostMediaArgs = {
  updatePostMediaInput: UpdatePostMediaInput;
};


export type MutationUpdatePostMentionArgs = {
  updatePostMentionInput: UpdatePostMentionInput;
};


export type MutationUpdatePostTagArgs = {
  updatePostTagInput: UpdatePostTagInput;
};


export type MutationUpdateSelfArgs = {
  backgroundPictureFile?: InputMaybe<Scalars['Upload']>;
  profilePictureFile?: InputMaybe<Scalars['Upload']>;
  update?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateTagArgs = {
  updateTagInput: UpdateTagInput;
};

export type Post = {
  author: User;
  createdAt: Scalars['DateTime'];
  /** Raw generated by Draft.js */
  draftRaw?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowOnly?: Maybe<Scalars['Boolean']>;
  medias: Array<PostMedia>;
  postParentId?: Maybe<Scalars['Int']>;
  user: User;
};

export type PostMedia = {
  id: Scalars['Int'];
  path: Scalars['String'];
  post: Post;
};

export type PostMention = {
  post: Post;
  user: User;
};

export type PostTag = {
  post: Post;
  tag: Tag;
};

export type Profile = {
  backroundPicture?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  profilePicture?: Maybe<Scalars['String']>;
  user: User;
};

export type ProfileWithoutUser = {
  backroundPicture?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  profilePicture?: Maybe<Scalars['String']>;
};

export type Query = {
  feed: FeedOuput;
  isFollow: Scalars['Boolean'];
  login: LoginOutput;
  me: User;
  post: Post;
  postMedia: PostMedia;
  postMention: PostMention;
  postTag: PostTag;
  rememberMe: LoginOutput;
  tag: Tag;
  user: User;
  users: FindAllUserOutput;
};


export type QueryFeedArgs = {
  input?: InputMaybe<FeedInput>;
};


export type QueryIsFollowArgs = {
  followerId: Scalars['Int'];
  followingId: Scalars['Int'];
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostMediaArgs = {
  id: Scalars['Int'];
};


export type QueryPostMentionArgs = {
  id: Scalars['Int'];
};


export type QueryPostTagArgs = {
  id: Scalars['Int'];
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUsersArgs = {
  input?: InputMaybe<FindAllUserInput>;
};

export type RemoveFollowerOutput = {
  userId: Scalars['Int'];
};

export type Role = {
  label: Scalars['String'];
  level: Scalars['String'];
  users: User;
};

export type RoleWithoutUser = {
  label: Scalars['String'];
  level: Scalars['String'];
};

export type SubUpdateProfileInput = {
  backroundPicture?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  displayname?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  follow: FollowMutationOutput;
};

export type Tag = {
  createdAt: Scalars['DateTime'];
  tag: Scalars['String'];
};

export type UpdatePostInput = {
  /** Raw generated by Draft.js */
  draftRaw?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowOnly?: InputMaybe<Scalars['Boolean']>;
  mediasRemovedIds?: InputMaybe<Array<Scalars['Int']>>;
  postParentId?: InputMaybe<Scalars['Int']>;
};

export type UpdatePostMediaInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdatePostMentionInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdatePostTagInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateTagInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  isFollow?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<SubUpdateProfileInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  followers: FollowOutput;
  followings: FollowOutput;
  id: Scalars['Int'];
  isFollow: Scalars['Boolean'];
  /** Get user post */
  posts: FindAllPostOutput;
  /** Get user profile */
  profile: ProfileWithoutUser;
  roles: Array<RoleWithoutUser>;
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  input?: InputMaybe<FollowInput>;
};


export type UserFollowingsArgs = {
  input?: InputMaybe<FollowInput>;
};


export type UserPostsArgs = {
  input?: InputMaybe<FollowInput>;
};

export type UpdatePostMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UpdatePostInput>;
  medias?: Types.InputMaybe<Array<Types.Scalars['Upload']> | Types.Scalars['Upload']>;
}>;


export type UpdatePostMutation = { updatePost: { id: number, draftRaw?: string | null, postParentId?: number | null, isFollowOnly?: boolean | null, createdAt: any, medias: Array<{ path: string, id: number }> } };


export const UpdatePostDocument = gql`
    mutation UpdatePost($input: UpdatePostInput, $medias: [Upload!]) {
  updatePost(input: $input, medias: $medias) {
    id
    draftRaw
    postParentId
    isFollowOnly
    createdAt
    medias {
      path
      id
    }
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *      medias: // value for 'medias'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;