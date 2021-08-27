import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  slot?: Maybe<Scalars['Int']>;
};

export type BaseList = {
  __typename?: 'BaseList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<BaseName>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type BaseName = {
  __typename?: 'BaseName';
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['JSON']>;
  params?: Maybe<Scalars['JSON']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};



export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']>;
  forms?: Maybe<Array<Maybe<BaseName>>>;
  game_indices?: Maybe<Array<Maybe<GameIndex>>>;
  height?: Maybe<Scalars['Int']>;
  held_items?: Maybe<Array<Maybe<HeldItem>>>;
  id?: Maybe<Scalars['Int']>;
  is_default?: Maybe<Scalars['Boolean']>;
  location_area_encounters?: Maybe<Scalars['String']>;
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  species?: Maybe<BaseName>;
  sprites?: Maybe<Sprite>;
  stats?: Maybe<Array<Maybe<Stat>>>;
  types?: Maybe<Array<Maybe<Type>>>;
  weight?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  artwork?: Maybe<Scalars['String']>;
  dreamworld?: Maybe<Scalars['String']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  nextOffset?: Maybe<Scalars['Int']>;
  prevOffset?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['JSON']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<BaseList>;
  ability?: Maybe<BaseResponse>;
  berries?: Maybe<BaseList>;
  berry?: Maybe<BaseResponse>;
  eggGroups?: Maybe<BaseList>;
  eggGroup?: Maybe<BaseResponse>;
  encounterMethods?: Maybe<BaseList>;
  encounterMethod?: Maybe<BaseResponse>;
  evolutionChains?: Maybe<BaseList>;
  evolutionChain?: Maybe<BaseResponse>;
  evolutionTriggers?: Maybe<BaseList>;
  evolutionTrigger?: Maybe<BaseResponse>;
  genders?: Maybe<BaseList>;
  gender?: Maybe<BaseResponse>;
  growthRates?: Maybe<BaseList>;
  growthRate?: Maybe<BaseResponse>;
  locations?: Maybe<BaseList>;
  location?: Maybe<BaseResponse>;
  moves?: Maybe<BaseList>;
  move?: Maybe<BaseResponse>;
  natures?: Maybe<BaseList>;
  nature?: Maybe<BaseResponse>;
  pokemons?: Maybe<PokemonList>;
  pokemon?: Maybe<Pokemon>;
  regions?: Maybe<BaseList>;
  region?: Maybe<BaseResponse>;
  species?: Maybe<BaseList>;
  types?: Maybe<BaseList>;
};


export type QueryAbilityArgs = {
  ability: Scalars['String'];
};


export type QueryBerryArgs = {
  berry: Scalars['String'];
};


export type QueryEggGroupArgs = {
  eggGroup: Scalars['String'];
};


export type QueryEncounterMethodArgs = {
  encounterMethod: Scalars['String'];
};


export type QueryEvolutionChainArgs = {
  id: Scalars['String'];
};


export type QueryEvolutionTriggerArgs = {
  name: Scalars['String'];
};


export type QueryGenderArgs = {
  gender: Scalars['String'];
};


export type QueryGrowthRateArgs = {
  growthRate: Scalars['String'];
};


export type QueryLocationArgs = {
  location: Scalars['String'];
};


export type QueryMoveArgs = {
  move: Scalars['String'];
};


export type QueryNatureArgs = {
  nature: Scalars['String'];
};


export type QueryPokemonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPokemonArgs = {
  name: Scalars['String'];
};


export type QueryRegionArgs = {
  region: Scalars['String'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']>;
  back_female?: Maybe<Scalars['String']>;
  back_shiny?: Maybe<Scalars['String']>;
  back_shiny_female?: Maybe<Scalars['String']>;
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']>;
  effort?: Maybe<Scalars['Int']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']>;
  type?: Maybe<BaseName>;
};


export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};

export type PokemonQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type PokemonQuery = { __typename?: 'Query', pokemon?: Maybe<{ __typename?: 'Pokemon', id?: Maybe<number>, name?: Maybe<string>, message?: Maybe<string>, status?: Maybe<boolean>, abilities?: Maybe<Array<Maybe<{ __typename?: 'Ability', ability?: Maybe<{ __typename?: 'BaseName', name?: Maybe<string> }> }>>>, moves?: Maybe<Array<Maybe<{ __typename?: 'Move', move?: Maybe<{ __typename?: 'BaseName', name?: Maybe<string> }> }>>>, types?: Maybe<Array<Maybe<{ __typename?: 'Type', type?: Maybe<{ __typename?: 'BaseName', name?: Maybe<string> }> }>>> }> };

export type PokemonsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Maybe<{ __typename?: 'PokemonList', count?: Maybe<number>, next?: Maybe<string>, previous?: Maybe<string>, status?: Maybe<boolean>, message?: Maybe<string>, results?: Maybe<Array<Maybe<{ __typename?: 'PokemonItem', url?: Maybe<string>, name?: Maybe<string>, image?: Maybe<string> }>>> }> };


export const PokemonDocument = gql`
    query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    message
    status
  }
}
    `;
export const PokemonsDocument = gql`
    query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Ability",
        "fields": [
          {
            "name": "ability",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "is_hidden",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BaseList",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "next",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "previous",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "results",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "BaseName",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BaseName",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BaseResponse",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "response",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "params",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameIndex",
        "fields": [
          {
            "name": "game_index",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HeldItem",
        "fields": [
          {
            "name": "item",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "version_details",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "VersionDetail",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Move",
        "fields": [
          {
            "name": "move",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "version_group_details",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "VersionGroupDetail",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Pokemon",
        "fields": [
          {
            "name": "abilities",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ability",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "base_experience",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "forms",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "BaseName",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "game_indices",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameIndex",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "held_items",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "HeldItem",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "is_default",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location_area_encounters",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "moves",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Move",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "species",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sprites",
            "type": {
              "kind": "OBJECT",
              "name": "Sprite",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stats",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Stat",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "types",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Type",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "weight",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonItem",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "artwork",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "dreamworld",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonList",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "next",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "previous",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nextOffset",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "prevOffset",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "params",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "results",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "PokemonItem",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "abilities",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ability",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "ability",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "berries",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "berry",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "berry",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "eggGroups",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "eggGroup",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "eggGroup",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "encounterMethods",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "encounterMethod",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "encounterMethod",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "evolutionChains",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "evolutionChain",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "evolutionTriggers",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "evolutionTrigger",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "genders",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "gender",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "gender",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "growthRates",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "growthRate",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "growthRate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "locations",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "location",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "moves",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "move",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "move",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "natures",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nature",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "nature",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pokemons",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonList",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pokemon",
            "type": {
              "kind": "OBJECT",
              "name": "Pokemon",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "regions",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "region",
            "type": {
              "kind": "OBJECT",
              "name": "BaseResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "region",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "species",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "types",
            "type": {
              "kind": "OBJECT",
              "name": "BaseList",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Sprite",
        "fields": [
          {
            "name": "back_default",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "back_female",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "back_shiny",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "back_shiny_female",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "front_default",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "front_female",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "front_shiny",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "front_shiny_female",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Stat",
        "fields": [
          {
            "name": "base_stat",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "effort",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "stat",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Type",
        "fields": [
          {
            "name": "slot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "VersionDetail",
        "fields": [
          {
            "name": "rarity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "VersionGroupDetail",
        "fields": [
          {
            "name": "level_learned_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "move_learn_method",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "version_group",
            "type": {
              "kind": "OBJECT",
              "name": "BaseName",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;