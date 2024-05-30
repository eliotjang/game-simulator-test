
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model CharacterInventory
 * 
 */
export type CharacterInventory = $Result.DefaultSelection<Prisma.$CharacterInventoryPayload>
/**
 * Model CharacterItems
 * 
 */
export type CharacterItems = $Result.DefaultSelection<Prisma.$CharacterItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.characterInventory`: Exposes CRUD operations for the **CharacterInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterInventories
    * const characterInventories = await prisma.characterInventory.findMany()
    * ```
    */
  get characterInventory(): Prisma.CharacterInventoryDelegate<ExtArgs>;

  /**
   * `prisma.characterItems`: Exposes CRUD operations for the **CharacterItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterItems
    * const characterItems = await prisma.characterItems.findMany()
    * ```
    */
  get characterItems(): Prisma.CharacterItemsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Characters: 'Characters',
    CharacterInventory: 'CharacterInventory',
    CharacterItems: 'CharacterItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'characters' | 'characterInventory' | 'characterItems'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      CharacterInventory: {
        payload: Prisma.$CharacterInventoryPayload<ExtArgs>
        fields: Prisma.CharacterInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterInventoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findFirst: {
            args: Prisma.CharacterInventoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterInventoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findMany: {
            args: Prisma.CharacterInventoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>[]
          }
          create: {
            args: Prisma.CharacterInventoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          createMany: {
            args: Prisma.CharacterInventoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterInventoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          update: {
            args: Prisma.CharacterInventoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          deleteMany: {
            args: Prisma.CharacterInventoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterInventoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterInventoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          aggregate: {
            args: Prisma.CharacterInventoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterInventory>
          }
          groupBy: {
            args: Prisma.CharacterInventoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterInventoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterInventoryCountAggregateOutputType> | number
          }
        }
      }
      CharacterItems: {
        payload: Prisma.$CharacterItemsPayload<ExtArgs>
        fields: Prisma.CharacterItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          findFirst: {
            args: Prisma.CharacterItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          findMany: {
            args: Prisma.CharacterItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>[]
          }
          create: {
            args: Prisma.CharacterItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          createMany: {
            args: Prisma.CharacterItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          update: {
            args: Prisma.CharacterItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          deleteMany: {
            args: Prisma.CharacterItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemsPayload>
          }
          aggregate: {
            args: Prisma.CharacterItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterItems>
          }
          groupBy: {
            args: Prisma.CharacterItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Characters: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | UsersCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    CharacterInventory: number
    CharacterItems: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CharacterInventory?: boolean | CharactersCountOutputTypeCountCharacterInventoryArgs
    CharacterItems?: boolean | CharactersCountOutputTypeCountCharacterItemsArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountCharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountCharacterItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userId: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Characters<T extends Users$CharactersArgs<ExtArgs> = {}>(args?: Subset<T, Users$CharactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.Characters
   */
  export type Users$CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    characterId: number | null
    characterPower: number | null
    characterHealth: number | null
    gameMoney: number | null
  }

  export type CharactersSumAggregateOutputType = {
    characterId: number | null
    characterPower: number | null
    characterHealth: number | null
    gameMoney: number | null
  }

  export type CharactersMinAggregateOutputType = {
    characterId: number | null
    UserId: string | null
    characterName: string | null
    characterPower: number | null
    characterHealth: number | null
    gameMoney: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersMaxAggregateOutputType = {
    characterId: number | null
    UserId: string | null
    characterName: string | null
    characterPower: number | null
    characterHealth: number | null
    gameMoney: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersCountAggregateOutputType = {
    characterId: number
    UserId: number
    characterName: number
    characterPower: number
    characterHealth: number
    gameMoney: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    characterId?: true
    characterPower?: true
    characterHealth?: true
    gameMoney?: true
  }

  export type CharactersSumAggregateInputType = {
    characterId?: true
    characterPower?: true
    characterHealth?: true
    gameMoney?: true
  }

  export type CharactersMinAggregateInputType = {
    characterId?: true
    UserId?: true
    characterName?: true
    characterPower?: true
    characterHealth?: true
    gameMoney?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersMaxAggregateInputType = {
    characterId?: true
    UserId?: true
    characterName?: true
    characterPower?: true
    characterHealth?: true
    gameMoney?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersCountAggregateInputType = {
    characterId?: true
    UserId?: true
    characterName?: true
    characterPower?: true
    characterHealth?: true
    gameMoney?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    characterId: number
    UserId: string
    characterName: string
    characterPower: number
    characterHealth: number
    gameMoney: number
    createdAt: Date
    updatedAt: Date
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    UserId?: boolean
    characterName?: boolean
    characterPower?: boolean
    characterHealth?: boolean
    gameMoney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    CharacterInventory?: boolean | Characters$CharacterInventoryArgs<ExtArgs>
    CharacterItems?: boolean | Characters$CharacterItemsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectScalar = {
    characterId?: boolean
    UserId?: boolean
    characterName?: boolean
    characterPower?: boolean
    characterHealth?: boolean
    gameMoney?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    CharacterInventory?: boolean | Characters$CharacterInventoryArgs<ExtArgs>
    CharacterItems?: boolean | Characters$CharacterItemsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      CharacterInventory: Prisma.$CharacterInventoryPayload<ExtArgs>[]
      CharacterItems: Prisma.$CharacterItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      UserId: string
      characterName: string
      characterPower: number
      characterHealth: number
      gameMoney: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }


  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersWithCharacterIdOnly = await prisma.characters.findMany({ select: { characterId: true } })
     * 
    **/
    findMany<T extends CharactersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
    **/
    create<T extends CharactersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
    **/
    delete<T extends CharactersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    CharacterInventory<T extends Characters$CharacterInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Characters$CharacterInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    CharacterItems<T extends Characters$CharacterItemsArgs<ExtArgs> = {}>(args?: Subset<T, Characters$CharacterItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly characterId: FieldRef<"Characters", 'Int'>
    readonly UserId: FieldRef<"Characters", 'String'>
    readonly characterName: FieldRef<"Characters", 'String'>
    readonly characterPower: FieldRef<"Characters", 'Int'>
    readonly characterHealth: FieldRef<"Characters", 'Int'>
    readonly gameMoney: FieldRef<"Characters", 'Int'>
    readonly createdAt: FieldRef<"Characters", 'DateTime'>
    readonly updatedAt: FieldRef<"Characters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.CharacterInventory
   */
  export type Characters$CharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    where?: CharacterInventoryWhereInput
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    cursor?: CharacterInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * Characters.CharacterItems
   */
  export type Characters$CharacterItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    where?: CharacterItemsWhereInput
    orderBy?: CharacterItemsOrderByWithRelationInput | CharacterItemsOrderByWithRelationInput[]
    cursor?: CharacterItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterItemsScalarFieldEnum | CharacterItemsScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model CharacterInventory
   */

  export type AggregateCharacterInventory = {
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  export type CharacterInventoryAvgAggregateOutputType = {
    characterInventoryId: number | null
    CharacterId: number | null
    itemCode: number | null
    itemCount: number | null
  }

  export type CharacterInventorySumAggregateOutputType = {
    characterInventoryId: number | null
    CharacterId: number | null
    itemCode: number | null
    itemCount: number | null
  }

  export type CharacterInventoryMinAggregateOutputType = {
    characterInventoryId: number | null
    CharacterId: number | null
    itemCode: number | null
    itemCount: number | null
  }

  export type CharacterInventoryMaxAggregateOutputType = {
    characterInventoryId: number | null
    CharacterId: number | null
    itemCode: number | null
    itemCount: number | null
  }

  export type CharacterInventoryCountAggregateOutputType = {
    characterInventoryId: number
    CharacterId: number
    itemCode: number
    itemCount: number
    _all: number
  }


  export type CharacterInventoryAvgAggregateInputType = {
    characterInventoryId?: true
    CharacterId?: true
    itemCode?: true
    itemCount?: true
  }

  export type CharacterInventorySumAggregateInputType = {
    characterInventoryId?: true
    CharacterId?: true
    itemCode?: true
    itemCount?: true
  }

  export type CharacterInventoryMinAggregateInputType = {
    characterInventoryId?: true
    CharacterId?: true
    itemCode?: true
    itemCount?: true
  }

  export type CharacterInventoryMaxAggregateInputType = {
    characterInventoryId?: true
    CharacterId?: true
    itemCode?: true
    itemCount?: true
  }

  export type CharacterInventoryCountAggregateInputType = {
    characterInventoryId?: true
    CharacterId?: true
    itemCode?: true
    itemCount?: true
    _all?: true
  }

  export type CharacterInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventory to aggregate.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterInventories
    **/
    _count?: true | CharacterInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type GetCharacterInventoryAggregateType<T extends CharacterInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterInventory[P]>
      : GetScalarType<T[P], AggregateCharacterInventory[P]>
  }




  export type CharacterInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterInventoryWhereInput
    orderBy?: CharacterInventoryOrderByWithAggregationInput | CharacterInventoryOrderByWithAggregationInput[]
    by: CharacterInventoryScalarFieldEnum[] | CharacterInventoryScalarFieldEnum
    having?: CharacterInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterInventoryCountAggregateInputType | true
    _avg?: CharacterInventoryAvgAggregateInputType
    _sum?: CharacterInventorySumAggregateInputType
    _min?: CharacterInventoryMinAggregateInputType
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type CharacterInventoryGroupByOutputType = {
    characterInventoryId: number
    CharacterId: number
    itemCode: number
    itemCount: number
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  type GetCharacterInventoryGroupByPayload<T extends CharacterInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
        }
      >
    >


  export type CharacterInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterInventoryId?: boolean
    CharacterId?: boolean
    itemCode?: boolean
    itemCount?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterInventory"]>

  export type CharacterInventorySelectScalar = {
    characterInventoryId?: boolean
    CharacterId?: boolean
    itemCode?: boolean
    itemCount?: boolean
  }


  export type CharacterInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $CharacterInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterInventory"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterInventoryId: number
      CharacterId: number
      itemCode: number
      itemCount: number
    }, ExtArgs["result"]["characterInventory"]>
    composites: {}
  }


  type CharacterInventoryGetPayload<S extends boolean | null | undefined | CharacterInventoryDefaultArgs> = $Result.GetResult<Prisma.$CharacterInventoryPayload, S>

  type CharacterInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterInventoryCountAggregateInputType | true
    }

  export interface CharacterInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterInventory'], meta: { name: 'CharacterInventory' } }
    /**
     * Find zero or one CharacterInventory that matches the filter.
     * @param {CharacterInventoryFindUniqueArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterInventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharacterInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterInventoryFindUniqueOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterInventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterInventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharacterInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany()
     * 
     * // Get first 10 CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany({ take: 10 })
     * 
     * // Only select the `characterInventoryId`
     * const characterInventoryWithCharacterInventoryIdOnly = await prisma.characterInventory.findMany({ select: { characterInventoryId: true } })
     * 
    **/
    findMany<T extends CharacterInventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharacterInventory.
     * @param {CharacterInventoryCreateArgs} args - Arguments to create a CharacterInventory.
     * @example
     * // Create one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.create({
     *   data: {
     *     // ... data to create a CharacterInventory
     *   }
     * })
     * 
    **/
    create<T extends CharacterInventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryCreateArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharacterInventories.
     * @param {CharacterInventoryCreateManyArgs} args - Arguments to create many CharacterInventories.
     * @example
     * // Create many CharacterInventories
     * const characterInventory = await prisma.characterInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharacterInventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterInventory.
     * @param {CharacterInventoryDeleteArgs} args - Arguments to delete one CharacterInventory.
     * @example
     * // Delete one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.delete({
     *   where: {
     *     // ... filter to delete one CharacterInventory
     *   }
     * })
     * 
    **/
    delete<T extends CharacterInventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryDeleteArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharacterInventory.
     * @param {CharacterInventoryUpdateArgs} args - Arguments to update one CharacterInventory.
     * @example
     * // Update one CharacterInventory
     * const characterInventory = await prisma.characterInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterInventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpdateArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharacterInventories.
     * @param {CharacterInventoryDeleteManyArgs} args - Arguments to filter CharacterInventories to delete.
     * @example
     * // Delete a few CharacterInventories
     * const { count } = await prisma.characterInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterInventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterInventories
     * const characterInventory = await prisma.characterInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterInventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterInventory.
     * @param {CharacterInventoryUpsertArgs} args - Arguments to update or create a CharacterInventory.
     * @example
     * // Update or create a CharacterInventory
     * const characterInventory = await prisma.characterInventory.upsert({
     *   create: {
     *     // ... data to create a CharacterInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterInventory we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterInventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpsertArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryCountArgs} args - Arguments to filter CharacterInventories to count.
     * @example
     * // Count the number of CharacterInventories
     * const count = await prisma.characterInventory.count({
     *   where: {
     *     // ... the filter for the CharacterInventories we want to count
     *   }
     * })
    **/
    count<T extends CharacterInventoryCountArgs>(
      args?: Subset<T, CharacterInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterInventoryAggregateArgs>(args: Subset<T, CharacterInventoryAggregateArgs>): Prisma.PrismaPromise<GetCharacterInventoryAggregateType<T>>

    /**
     * Group by CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterInventoryGroupByArgs['orderBy'] }
        : { orderBy?: CharacterInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterInventory model
   */
  readonly fields: CharacterInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharacterInventory model
   */ 
  interface CharacterInventoryFieldRefs {
    readonly characterInventoryId: FieldRef<"CharacterInventory", 'Int'>
    readonly CharacterId: FieldRef<"CharacterInventory", 'Int'>
    readonly itemCode: FieldRef<"CharacterInventory", 'Int'>
    readonly itemCount: FieldRef<"CharacterInventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterInventory findUnique
   */
  export type CharacterInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findUniqueOrThrow
   */
  export type CharacterInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findFirst
   */
  export type CharacterInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findFirstOrThrow
   */
  export type CharacterInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findMany
   */
  export type CharacterInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventories to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory create
   */
  export type CharacterInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterInventory.
     */
    data: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
  }

  /**
   * CharacterInventory createMany
   */
  export type CharacterInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterInventories.
     */
    data: CharacterInventoryCreateManyInput | CharacterInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterInventory update
   */
  export type CharacterInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterInventory.
     */
    data: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
    /**
     * Choose, which CharacterInventory to update.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory updateMany
   */
  export type CharacterInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterInventories.
     */
    data: XOR<CharacterInventoryUpdateManyMutationInput, CharacterInventoryUncheckedUpdateManyInput>
    /**
     * Filter which CharacterInventories to update
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory upsert
   */
  export type CharacterInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterInventory to update in case it exists.
     */
    where: CharacterInventoryWhereUniqueInput
    /**
     * In case the CharacterInventory found by the `where` argument doesn't exist, create a new CharacterInventory with this data.
     */
    create: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
    /**
     * In case the CharacterInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
  }

  /**
   * CharacterInventory delete
   */
  export type CharacterInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter which CharacterInventory to delete.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory deleteMany
   */
  export type CharacterInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventories to delete
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory without action
   */
  export type CharacterInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
  }


  /**
   * Model CharacterItems
   */

  export type AggregateCharacterItems = {
    _count: CharacterItemsCountAggregateOutputType | null
    _avg: CharacterItemsAvgAggregateOutputType | null
    _sum: CharacterItemsSumAggregateOutputType | null
    _min: CharacterItemsMinAggregateOutputType | null
    _max: CharacterItemsMaxAggregateOutputType | null
  }

  export type CharacterItemsAvgAggregateOutputType = {
    characterItemId: number | null
    CharacterId: number | null
    itemCode: number | null
  }

  export type CharacterItemsSumAggregateOutputType = {
    characterItemId: number | null
    CharacterId: number | null
    itemCode: number | null
  }

  export type CharacterItemsMinAggregateOutputType = {
    characterItemId: number | null
    CharacterId: number | null
    itemCode: number | null
  }

  export type CharacterItemsMaxAggregateOutputType = {
    characterItemId: number | null
    CharacterId: number | null
    itemCode: number | null
  }

  export type CharacterItemsCountAggregateOutputType = {
    characterItemId: number
    CharacterId: number
    itemCode: number
    _all: number
  }


  export type CharacterItemsAvgAggregateInputType = {
    characterItemId?: true
    CharacterId?: true
    itemCode?: true
  }

  export type CharacterItemsSumAggregateInputType = {
    characterItemId?: true
    CharacterId?: true
    itemCode?: true
  }

  export type CharacterItemsMinAggregateInputType = {
    characterItemId?: true
    CharacterId?: true
    itemCode?: true
  }

  export type CharacterItemsMaxAggregateInputType = {
    characterItemId?: true
    CharacterId?: true
    itemCode?: true
  }

  export type CharacterItemsCountAggregateInputType = {
    characterItemId?: true
    CharacterId?: true
    itemCode?: true
    _all?: true
  }

  export type CharacterItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItems to aggregate.
     */
    where?: CharacterItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemsOrderByWithRelationInput | CharacterItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterItems
    **/
    _count?: true | CharacterItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterItemsMaxAggregateInputType
  }

  export type GetCharacterItemsAggregateType<T extends CharacterItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterItems[P]>
      : GetScalarType<T[P], AggregateCharacterItems[P]>
  }




  export type CharacterItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterItemsWhereInput
    orderBy?: CharacterItemsOrderByWithAggregationInput | CharacterItemsOrderByWithAggregationInput[]
    by: CharacterItemsScalarFieldEnum[] | CharacterItemsScalarFieldEnum
    having?: CharacterItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterItemsCountAggregateInputType | true
    _avg?: CharacterItemsAvgAggregateInputType
    _sum?: CharacterItemsSumAggregateInputType
    _min?: CharacterItemsMinAggregateInputType
    _max?: CharacterItemsMaxAggregateInputType
  }

  export type CharacterItemsGroupByOutputType = {
    characterItemId: number
    CharacterId: number
    itemCode: number
    _count: CharacterItemsCountAggregateOutputType | null
    _avg: CharacterItemsAvgAggregateOutputType | null
    _sum: CharacterItemsSumAggregateOutputType | null
    _min: CharacterItemsMinAggregateOutputType | null
    _max: CharacterItemsMaxAggregateOutputType | null
  }

  type GetCharacterItemsGroupByPayload<T extends CharacterItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterItemsGroupByOutputType[P]>
        }
      >
    >


  export type CharacterItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterItemId?: boolean
    CharacterId?: boolean
    itemCode?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterItems"]>

  export type CharacterItemsSelectScalar = {
    characterItemId?: boolean
    CharacterId?: boolean
    itemCode?: boolean
  }


  export type CharacterItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $CharacterItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterItems"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterItemId: number
      CharacterId: number
      itemCode: number
    }, ExtArgs["result"]["characterItems"]>
    composites: {}
  }


  type CharacterItemsGetPayload<S extends boolean | null | undefined | CharacterItemsDefaultArgs> = $Result.GetResult<Prisma.$CharacterItemsPayload, S>

  type CharacterItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterItemsCountAggregateInputType | true
    }

  export interface CharacterItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterItems'], meta: { name: 'CharacterItems' } }
    /**
     * Find zero or one CharacterItems that matches the filter.
     * @param {CharacterItemsFindUniqueArgs} args - Arguments to find a CharacterItems
     * @example
     * // Get one CharacterItems
     * const characterItems = await prisma.characterItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharacterItems that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterItemsFindUniqueOrThrowArgs} args - Arguments to find a CharacterItems
     * @example
     * // Get one CharacterItems
     * const characterItems = await prisma.characterItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharacterItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsFindFirstArgs} args - Arguments to find a CharacterItems
     * @example
     * // Get one CharacterItems
     * const characterItems = await prisma.characterItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharacterItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsFindFirstOrThrowArgs} args - Arguments to find a CharacterItems
     * @example
     * // Get one CharacterItems
     * const characterItems = await prisma.characterItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharacterItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterItems
     * const characterItems = await prisma.characterItems.findMany()
     * 
     * // Get first 10 CharacterItems
     * const characterItems = await prisma.characterItems.findMany({ take: 10 })
     * 
     * // Only select the `characterItemId`
     * const characterItemsWithCharacterItemIdOnly = await prisma.characterItems.findMany({ select: { characterItemId: true } })
     * 
    **/
    findMany<T extends CharacterItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharacterItems.
     * @param {CharacterItemsCreateArgs} args - Arguments to create a CharacterItems.
     * @example
     * // Create one CharacterItems
     * const CharacterItems = await prisma.characterItems.create({
     *   data: {
     *     // ... data to create a CharacterItems
     *   }
     * })
     * 
    **/
    create<T extends CharacterItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsCreateArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharacterItems.
     * @param {CharacterItemsCreateManyArgs} args - Arguments to create many CharacterItems.
     * @example
     * // Create many CharacterItems
     * const characterItems = await prisma.characterItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharacterItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterItems.
     * @param {CharacterItemsDeleteArgs} args - Arguments to delete one CharacterItems.
     * @example
     * // Delete one CharacterItems
     * const CharacterItems = await prisma.characterItems.delete({
     *   where: {
     *     // ... filter to delete one CharacterItems
     *   }
     * })
     * 
    **/
    delete<T extends CharacterItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsDeleteArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharacterItems.
     * @param {CharacterItemsUpdateArgs} args - Arguments to update one CharacterItems.
     * @example
     * // Update one CharacterItems
     * const characterItems = await prisma.characterItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsUpdateArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharacterItems.
     * @param {CharacterItemsDeleteManyArgs} args - Arguments to filter CharacterItems to delete.
     * @example
     * // Delete a few CharacterItems
     * const { count } = await prisma.characterItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterItems
     * const characterItems = await prisma.characterItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterItems.
     * @param {CharacterItemsUpsertArgs} args - Arguments to update or create a CharacterItems.
     * @example
     * // Update or create a CharacterItems
     * const characterItems = await prisma.characterItems.upsert({
     *   create: {
     *     // ... data to create a CharacterItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterItems we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemsUpsertArgs<ExtArgs>>
    ): Prisma__CharacterItemsClient<$Result.GetResult<Prisma.$CharacterItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsCountArgs} args - Arguments to filter CharacterItems to count.
     * @example
     * // Count the number of CharacterItems
     * const count = await prisma.characterItems.count({
     *   where: {
     *     // ... the filter for the CharacterItems we want to count
     *   }
     * })
    **/
    count<T extends CharacterItemsCountArgs>(
      args?: Subset<T, CharacterItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterItemsAggregateArgs>(args: Subset<T, CharacterItemsAggregateArgs>): Prisma.PrismaPromise<GetCharacterItemsAggregateType<T>>

    /**
     * Group by CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterItemsGroupByArgs['orderBy'] }
        : { orderBy?: CharacterItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterItems model
   */
  readonly fields: CharacterItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharacterItems model
   */ 
  interface CharacterItemsFieldRefs {
    readonly characterItemId: FieldRef<"CharacterItems", 'Int'>
    readonly CharacterId: FieldRef<"CharacterItems", 'Int'>
    readonly itemCode: FieldRef<"CharacterItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterItems findUnique
   */
  export type CharacterItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where: CharacterItemsWhereUniqueInput
  }

  /**
   * CharacterItems findUniqueOrThrow
   */
  export type CharacterItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where: CharacterItemsWhereUniqueInput
  }

  /**
   * CharacterItems findFirst
   */
  export type CharacterItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where?: CharacterItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemsOrderByWithRelationInput | CharacterItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemsScalarFieldEnum | CharacterItemsScalarFieldEnum[]
  }

  /**
   * CharacterItems findFirstOrThrow
   */
  export type CharacterItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where?: CharacterItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemsOrderByWithRelationInput | CharacterItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemsScalarFieldEnum | CharacterItemsScalarFieldEnum[]
  }

  /**
   * CharacterItems findMany
   */
  export type CharacterItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where?: CharacterItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemsOrderByWithRelationInput | CharacterItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterItems.
     */
    cursor?: CharacterItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    distinct?: CharacterItemsScalarFieldEnum | CharacterItemsScalarFieldEnum[]
  }

  /**
   * CharacterItems create
   */
  export type CharacterItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterItems.
     */
    data: XOR<CharacterItemsCreateInput, CharacterItemsUncheckedCreateInput>
  }

  /**
   * CharacterItems createMany
   */
  export type CharacterItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterItems.
     */
    data: CharacterItemsCreateManyInput | CharacterItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterItems update
   */
  export type CharacterItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterItems.
     */
    data: XOR<CharacterItemsUpdateInput, CharacterItemsUncheckedUpdateInput>
    /**
     * Choose, which CharacterItems to update.
     */
    where: CharacterItemsWhereUniqueInput
  }

  /**
   * CharacterItems updateMany
   */
  export type CharacterItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterItems.
     */
    data: XOR<CharacterItemsUpdateManyMutationInput, CharacterItemsUncheckedUpdateManyInput>
    /**
     * Filter which CharacterItems to update
     */
    where?: CharacterItemsWhereInput
  }

  /**
   * CharacterItems upsert
   */
  export type CharacterItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterItems to update in case it exists.
     */
    where: CharacterItemsWhereUniqueInput
    /**
     * In case the CharacterItems found by the `where` argument doesn't exist, create a new CharacterItems with this data.
     */
    create: XOR<CharacterItemsCreateInput, CharacterItemsUncheckedCreateInput>
    /**
     * In case the CharacterItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterItemsUpdateInput, CharacterItemsUncheckedUpdateInput>
  }

  /**
   * CharacterItems delete
   */
  export type CharacterItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
    /**
     * Filter which CharacterItems to delete.
     */
    where: CharacterItemsWhereUniqueInput
  }

  /**
   * CharacterItems deleteMany
   */
  export type CharacterItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItems to delete
     */
    where?: CharacterItemsWhereInput
  }

  /**
   * CharacterItems without action
   */
  export type CharacterItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItems
     */
    select?: CharacterItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    characterId: 'characterId',
    UserId: 'UserId',
    characterName: 'characterName',
    characterPower: 'characterPower',
    characterHealth: 'characterHealth',
    gameMoney: 'gameMoney',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const CharacterInventoryScalarFieldEnum: {
    characterInventoryId: 'characterInventoryId',
    CharacterId: 'CharacterId',
    itemCode: 'itemCode',
    itemCount: 'itemCount'
  };

  export type CharacterInventoryScalarFieldEnum = (typeof CharacterInventoryScalarFieldEnum)[keyof typeof CharacterInventoryScalarFieldEnum]


  export const CharacterItemsScalarFieldEnum: {
    characterItemId: 'characterItemId',
    CharacterId: 'CharacterId',
    itemCode: 'itemCode'
  };

  export type CharacterItemsScalarFieldEnum = (typeof CharacterItemsScalarFieldEnum)[keyof typeof CharacterItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Characters?: CharactersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Characters?: CharactersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Characters?: CharactersListRelationFilter
  }, "userId">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    UserId?: StringFilter<"Characters"> | string
    characterName?: StringFilter<"Characters"> | string
    characterPower?: IntFilter<"Characters"> | number
    characterHealth?: IntFilter<"Characters"> | number
    gameMoney?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    CharacterInventory?: CharacterInventoryListRelationFilter
    CharacterItems?: CharacterItemsListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    characterName?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UsersOrderByWithRelationInput
    CharacterInventory?: CharacterInventoryOrderByRelationAggregateInput
    CharacterItems?: CharacterItemsOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    UserId?: StringFilter<"Characters"> | string
    characterName?: StringFilter<"Characters"> | string
    characterPower?: IntFilter<"Characters"> | number
    characterHealth?: IntFilter<"Characters"> | number
    gameMoney?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    CharacterInventory?: CharacterInventoryListRelationFilter
    CharacterItems?: CharacterItemsListRelationFilter
  }, "characterId">

  export type CharactersOrderByWithAggregationInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    characterName?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Characters"> | number
    UserId?: StringWithAggregatesFilter<"Characters"> | string
    characterName?: StringWithAggregatesFilter<"Characters"> | string
    characterPower?: IntWithAggregatesFilter<"Characters"> | number
    characterHealth?: IntWithAggregatesFilter<"Characters"> | number
    gameMoney?: IntWithAggregatesFilter<"Characters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
  }

  export type CharacterInventoryWhereInput = {
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    characterInventoryId?: IntFilter<"CharacterInventory"> | number
    CharacterId?: IntFilter<"CharacterInventory"> | number
    itemCode?: IntFilter<"CharacterInventory"> | number
    itemCount?: IntFilter<"CharacterInventory"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharacterInventoryOrderByWithRelationInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
    Character?: CharactersOrderByWithRelationInput
  }

  export type CharacterInventoryWhereUniqueInput = Prisma.AtLeast<{
    characterInventoryId?: number
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    CharacterId?: IntFilter<"CharacterInventory"> | number
    itemCode?: IntFilter<"CharacterInventory"> | number
    itemCount?: IntFilter<"CharacterInventory"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "characterInventoryId">

  export type CharacterInventoryOrderByWithAggregationInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
    _count?: CharacterInventoryCountOrderByAggregateInput
    _avg?: CharacterInventoryAvgOrderByAggregateInput
    _max?: CharacterInventoryMaxOrderByAggregateInput
    _min?: CharacterInventoryMinOrderByAggregateInput
    _sum?: CharacterInventorySumOrderByAggregateInput
  }

  export type CharacterInventoryScalarWhereWithAggregatesInput = {
    AND?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    OR?: CharacterInventoryScalarWhereWithAggregatesInput[]
    NOT?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    characterInventoryId?: IntWithAggregatesFilter<"CharacterInventory"> | number
    CharacterId?: IntWithAggregatesFilter<"CharacterInventory"> | number
    itemCode?: IntWithAggregatesFilter<"CharacterInventory"> | number
    itemCount?: IntWithAggregatesFilter<"CharacterInventory"> | number
  }

  export type CharacterItemsWhereInput = {
    AND?: CharacterItemsWhereInput | CharacterItemsWhereInput[]
    OR?: CharacterItemsWhereInput[]
    NOT?: CharacterItemsWhereInput | CharacterItemsWhereInput[]
    characterItemId?: IntFilter<"CharacterItems"> | number
    CharacterId?: IntFilter<"CharacterItems"> | number
    itemCode?: IntFilter<"CharacterItems"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharacterItemsOrderByWithRelationInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    Character?: CharactersOrderByWithRelationInput
  }

  export type CharacterItemsWhereUniqueInput = Prisma.AtLeast<{
    characterItemId?: number
    AND?: CharacterItemsWhereInput | CharacterItemsWhereInput[]
    OR?: CharacterItemsWhereInput[]
    NOT?: CharacterItemsWhereInput | CharacterItemsWhereInput[]
    CharacterId?: IntFilter<"CharacterItems"> | number
    itemCode?: IntFilter<"CharacterItems"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "characterItemId">

  export type CharacterItemsOrderByWithAggregationInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    _count?: CharacterItemsCountOrderByAggregateInput
    _avg?: CharacterItemsAvgOrderByAggregateInput
    _max?: CharacterItemsMaxOrderByAggregateInput
    _min?: CharacterItemsMinOrderByAggregateInput
    _sum?: CharacterItemsSumOrderByAggregateInput
  }

  export type CharacterItemsScalarWhereWithAggregatesInput = {
    AND?: CharacterItemsScalarWhereWithAggregatesInput | CharacterItemsScalarWhereWithAggregatesInput[]
    OR?: CharacterItemsScalarWhereWithAggregatesInput[]
    NOT?: CharacterItemsScalarWhereWithAggregatesInput | CharacterItemsScalarWhereWithAggregatesInput[]
    characterItemId?: IntWithAggregatesFilter<"CharacterItems"> | number
    CharacterId?: IntWithAggregatesFilter<"CharacterItems"> | number
    itemCode?: IntWithAggregatesFilter<"CharacterItems"> | number
  }

  export type UsersCreateInput = {
    userId: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Characters?: CharactersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Characters?: CharactersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characters?: CharactersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characters?: CharactersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateInput = {
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    CharacterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
    CharacterItems?: CharacterItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    characterId?: number
    UserId: string
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
    CharacterItems?: CharacterItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUpdateInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    CharacterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
    CharacterItems?: CharacterItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    CharacterItems?: CharacterItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    characterId?: number
    UserId: string
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateManyMutationInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterInventoryCreateInput = {
    itemCode: number
    itemCount: number
    Character: CharactersCreateNestedOneWithoutCharacterInventoryInput
  }

  export type CharacterInventoryUncheckedCreateInput = {
    characterInventoryId?: number
    CharacterId: number
    itemCode: number
    itemCount: number
  }

  export type CharacterInventoryUpdateInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
    Character?: CharactersUpdateOneRequiredWithoutCharacterInventoryNestedInput
  }

  export type CharacterInventoryUncheckedUpdateInput = {
    characterInventoryId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryCreateManyInput = {
    characterInventoryId?: number
    CharacterId: number
    itemCode: number
    itemCount: number
  }

  export type CharacterInventoryUpdateManyMutationInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateManyInput = {
    characterInventoryId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsCreateInput = {
    itemCode: number
    Character: CharactersCreateNestedOneWithoutCharacterItemsInput
  }

  export type CharacterItemsUncheckedCreateInput = {
    characterItemId?: number
    CharacterId: number
    itemCode: number
  }

  export type CharacterItemsUpdateInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    Character?: CharactersUpdateOneRequiredWithoutCharacterItemsNestedInput
  }

  export type CharacterItemsUncheckedUpdateInput = {
    characterItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsCreateManyInput = {
    characterItemId?: number
    CharacterId: number
    itemCode: number
  }

  export type CharacterItemsUpdateManyMutationInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsUncheckedUpdateManyInput = {
    characterItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CharacterInventoryListRelationFilter = {
    every?: CharacterInventoryWhereInput
    some?: CharacterInventoryWhereInput
    none?: CharacterInventoryWhereInput
  }

  export type CharacterItemsListRelationFilter = {
    every?: CharacterItemsWhereInput
    some?: CharacterItemsWhereInput
    none?: CharacterItemsWhereInput
  }

  export type CharacterInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    characterName?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    characterId?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    characterName?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    characterName?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    characterId?: SortOrder
    characterPower?: SortOrder
    characterHealth?: SortOrder
    gameMoney?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type CharacterInventoryCountOrderByAggregateInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
  }

  export type CharacterInventoryAvgOrderByAggregateInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
  }

  export type CharacterInventoryMaxOrderByAggregateInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
  }

  export type CharacterInventoryMinOrderByAggregateInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
  }

  export type CharacterInventorySumOrderByAggregateInput = {
    characterInventoryId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
    itemCount?: SortOrder
  }

  export type CharacterItemsCountOrderByAggregateInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
  }

  export type CharacterItemsAvgOrderByAggregateInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
  }

  export type CharacterItemsMaxOrderByAggregateInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
  }

  export type CharacterItemsMinOrderByAggregateInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
  }

  export type CharacterItemsSumOrderByAggregateInput = {
    characterItemId?: SortOrder
    CharacterId?: SortOrder
    itemCode?: SortOrder
  }

  export type CharactersCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CharactersUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type CharactersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    connect?: UsersWhereUniqueInput
  }

  export type CharacterInventoryCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
  }

  export type CharacterItemsCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput> | CharacterItemsCreateWithoutCharacterInput[] | CharacterItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemsCreateOrConnectWithoutCharacterInput | CharacterItemsCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterItemsCreateManyCharacterInputEnvelope
    connect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
  }

  export type CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
  }

  export type CharacterItemsUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput> | CharacterItemsCreateWithoutCharacterInput[] | CharacterItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemsCreateOrConnectWithoutCharacterInput | CharacterItemsCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterItemsCreateManyCharacterInputEnvelope
    connect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    upsert?: UsersUpsertWithoutCharactersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCharactersInput, UsersUpdateWithoutCharactersInput>, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterInventoryUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    set?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    disconnect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    delete?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    update?: CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterInventoryUpdateManyWithWhereWithoutCharacterInput | CharacterInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
  }

  export type CharacterItemsUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput> | CharacterItemsCreateWithoutCharacterInput[] | CharacterItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemsCreateOrConnectWithoutCharacterInput | CharacterItemsCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterItemsUpsertWithWhereUniqueWithoutCharacterInput | CharacterItemsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterItemsCreateManyCharacterInputEnvelope
    set?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    disconnect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    delete?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    connect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    update?: CharacterItemsUpdateWithWhereUniqueWithoutCharacterInput | CharacterItemsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterItemsUpdateManyWithWhereWithoutCharacterInput | CharacterItemsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterItemsScalarWhereInput | CharacterItemsScalarWhereInput[]
  }

  export type CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    set?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    disconnect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    delete?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    update?: CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterInventoryUpdateManyWithWhereWithoutCharacterInput | CharacterInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
  }

  export type CharacterItemsUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput> | CharacterItemsCreateWithoutCharacterInput[] | CharacterItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemsCreateOrConnectWithoutCharacterInput | CharacterItemsCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterItemsUpsertWithWhereUniqueWithoutCharacterInput | CharacterItemsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterItemsCreateManyCharacterInputEnvelope
    set?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    disconnect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    delete?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    connect?: CharacterItemsWhereUniqueInput | CharacterItemsWhereUniqueInput[]
    update?: CharacterItemsUpdateWithWhereUniqueWithoutCharacterInput | CharacterItemsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterItemsUpdateManyWithWhereWithoutCharacterInput | CharacterItemsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterItemsScalarWhereInput | CharacterItemsScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutCharacterInventoryInput = {
    create?: XOR<CharactersCreateWithoutCharacterInventoryInput, CharactersUncheckedCreateWithoutCharacterInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterInventoryInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutCharacterInventoryNestedInput = {
    create?: XOR<CharactersCreateWithoutCharacterInventoryInput, CharactersUncheckedCreateWithoutCharacterInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterInventoryInput
    upsert?: CharactersUpsertWithoutCharacterInventoryInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCharacterInventoryInput, CharactersUpdateWithoutCharacterInventoryInput>, CharactersUncheckedUpdateWithoutCharacterInventoryInput>
  }

  export type CharactersCreateNestedOneWithoutCharacterItemsInput = {
    create?: XOR<CharactersCreateWithoutCharacterItemsInput, CharactersUncheckedCreateWithoutCharacterItemsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterItemsInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutCharacterItemsNestedInput = {
    create?: XOR<CharactersCreateWithoutCharacterItemsInput, CharactersUncheckedCreateWithoutCharacterItemsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterItemsInput
    upsert?: CharactersUpsertWithoutCharacterItemsInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCharacterItemsInput, CharactersUpdateWithoutCharacterItemsInput>, CharactersUncheckedUpdateWithoutCharacterItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CharactersCreateWithoutUserInput = {
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
    CharacterItems?: CharacterItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutUserInput = {
    characterId?: number
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
    CharacterItems?: CharacterItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutUserInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersCreateManyUserInputEnvelope = {
    data: CharactersCreateManyUserInput | CharactersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
  }

  export type CharactersUpdateManyWithWhereWithoutUserInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutUserInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    UserId?: StringFilter<"Characters"> | string
    characterName?: StringFilter<"Characters"> | string
    characterPower?: IntFilter<"Characters"> | number
    characterHealth?: IntFilter<"Characters"> | number
    gameMoney?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
  }

  export type UsersCreateWithoutCharactersInput = {
    userId: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutCharactersInput = {
    userId: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutCharactersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterInventoryCreateWithoutCharacterInput = {
    itemCode: number
    itemCount: number
  }

  export type CharacterInventoryUncheckedCreateWithoutCharacterInput = {
    characterInventoryId?: number
    itemCode: number
    itemCount: number
  }

  export type CharacterInventoryCreateOrConnectWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    create: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterInventoryCreateManyCharacterInputEnvelope = {
    data: CharacterInventoryCreateManyCharacterInput | CharacterInventoryCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharacterItemsCreateWithoutCharacterInput = {
    itemCode: number
  }

  export type CharacterItemsUncheckedCreateWithoutCharacterInput = {
    characterItemId?: number
    itemCode: number
  }

  export type CharacterItemsCreateOrConnectWithoutCharacterInput = {
    where: CharacterItemsWhereUniqueInput
    create: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterItemsCreateManyCharacterInputEnvelope = {
    data: CharacterItemsCreateManyCharacterInput | CharacterItemsCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCharactersInput = {
    update: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type UsersUpdateWithoutCharactersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutCharactersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    update: XOR<CharacterInventoryUpdateWithoutCharacterInput, CharacterInventoryUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    data: XOR<CharacterInventoryUpdateWithoutCharacterInput, CharacterInventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterInventoryUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterInventoryScalarWhereInput
    data: XOR<CharacterInventoryUpdateManyMutationInput, CharacterInventoryUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterInventoryScalarWhereInput = {
    AND?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
    OR?: CharacterInventoryScalarWhereInput[]
    NOT?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
    characterInventoryId?: IntFilter<"CharacterInventory"> | number
    CharacterId?: IntFilter<"CharacterInventory"> | number
    itemCode?: IntFilter<"CharacterInventory"> | number
    itemCount?: IntFilter<"CharacterInventory"> | number
  }

  export type CharacterItemsUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterItemsWhereUniqueInput
    update: XOR<CharacterItemsUpdateWithoutCharacterInput, CharacterItemsUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterItemsCreateWithoutCharacterInput, CharacterItemsUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterItemsUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterItemsWhereUniqueInput
    data: XOR<CharacterItemsUpdateWithoutCharacterInput, CharacterItemsUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterItemsUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterItemsScalarWhereInput
    data: XOR<CharacterItemsUpdateManyMutationInput, CharacterItemsUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterItemsScalarWhereInput = {
    AND?: CharacterItemsScalarWhereInput | CharacterItemsScalarWhereInput[]
    OR?: CharacterItemsScalarWhereInput[]
    NOT?: CharacterItemsScalarWhereInput | CharacterItemsScalarWhereInput[]
    characterItemId?: IntFilter<"CharacterItems"> | number
    CharacterId?: IntFilter<"CharacterItems"> | number
    itemCode?: IntFilter<"CharacterItems"> | number
  }

  export type CharactersCreateWithoutCharacterInventoryInput = {
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    CharacterItems?: CharacterItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCharacterInventoryInput = {
    characterId?: number
    UserId: string
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterItems?: CharacterItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCharacterInventoryInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCharacterInventoryInput, CharactersUncheckedCreateWithoutCharacterInventoryInput>
  }

  export type CharactersUpsertWithoutCharacterInventoryInput = {
    update: XOR<CharactersUpdateWithoutCharacterInventoryInput, CharactersUncheckedUpdateWithoutCharacterInventoryInput>
    create: XOR<CharactersCreateWithoutCharacterInventoryInput, CharactersUncheckedCreateWithoutCharacterInventoryInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCharacterInventoryInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCharacterInventoryInput, CharactersUncheckedUpdateWithoutCharacterInventoryInput>
  }

  export type CharactersUpdateWithoutCharacterInventoryInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    CharacterItems?: CharacterItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCharacterInventoryInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterItems?: CharacterItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateWithoutCharacterItemsInput = {
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    CharacterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCharacterItemsInput = {
    characterId?: number
    UserId: string
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCharacterItemsInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCharacterItemsInput, CharactersUncheckedCreateWithoutCharacterItemsInput>
  }

  export type CharactersUpsertWithoutCharacterItemsInput = {
    update: XOR<CharactersUpdateWithoutCharacterItemsInput, CharactersUncheckedUpdateWithoutCharacterItemsInput>
    create: XOR<CharactersCreateWithoutCharacterItemsInput, CharactersUncheckedCreateWithoutCharacterItemsInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCharacterItemsInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCharacterItemsInput, CharactersUncheckedUpdateWithoutCharacterItemsInput>
  }

  export type CharactersUpdateWithoutCharacterItemsInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    CharacterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCharacterItemsInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyUserInput = {
    characterId?: number
    characterName: string
    characterPower?: number
    characterHealth?: number
    gameMoney?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateWithoutUserInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
    CharacterItems?: CharacterItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutUserInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    CharacterItems?: CharacterItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutUserInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    characterPower?: IntFieldUpdateOperationsInput | number
    characterHealth?: IntFieldUpdateOperationsInput | number
    gameMoney?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterInventoryCreateManyCharacterInput = {
    characterInventoryId?: number
    itemCode: number
    itemCount: number
  }

  export type CharacterItemsCreateManyCharacterInput = {
    characterItemId?: number
    itemCode: number
  }

  export type CharacterInventoryUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateWithoutCharacterInput = {
    characterInventoryId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateManyWithoutCharacterInput = {
    characterInventoryId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsUncheckedUpdateWithoutCharacterInput = {
    characterItemId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemsUncheckedUpdateManyWithoutCharacterInput = {
    characterItemId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersCountOutputTypeDefaultArgs instead
     */
    export type CharactersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterInventoryDefaultArgs instead
     */
    export type CharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterItemsDefaultArgs instead
     */
    export type CharacterItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterItemsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}