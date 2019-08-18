var N=null,E="",T="t",U="u",searchIndex={};
var R=["pointsofinflectioniterator","option","piecewiselinearfunction","coordinate","points_of_inflection_iter","Returns a new piecewise linear function that is the…","result","to_owned","clone_into","try_from","try_into","borrow_mut","type_id","rotate_around_point","translate","translate_inplace","envelope","distance_2","contains_point","borrow","typeid","into_iter","euclidean_distance","linestring","Minimum distance from a Line to a Point","polygon","multipolygon","map_coords_inplace","contains","failedtoconvergeerror","windingorder","euclidean_length","try_map_coords","intersects","vincenty_length","haversine_length","bounding_rect","centroid","map_coords","closest_point","closest","formatter","expanddomainstrategy","Returns a tuple that contains the x/horizontal &…","Coordinate","LineString","PiecewiseLinearFunction","ExpandDomainStrategy","PointsOfInflectionIterator","SegmentsIterator"];

searchIndex["piecewise_linear"]={"doc":"This crate provides utilities to manipulate continuous…","i":[[3,R[44],"piecewise_linear","A lightweight struct used to store coordinates on the…",N,N],[12,"x",E,E,0,N],[12,"y",E,E,0,N],[8,"CoordinateType",E,"The type of an x or y value of a point/coordinate.",N,N],[3,"Line",E,"A line segment made up of exactly two `Point`s.",N,N],[12,"start",E,E,1,N],[12,"end",E,E,1,N],[3,R[45],E,"An ordered collection of two or more `Coordinate`s,…",N,N],[12,"0",E,E,2,N],[3,"Point",E,"A single point in 2D space.",N,N],[12,"0",E,E,3,N],[3,R[46],E,"A continuous piecewise linear function.",N,N],[12,"coordinates",E,"Vector of points that make up the function.",4,N],[3,R[48],E,"Structure returned by `points_of_inflection_iter()`",N,N],[3,R[49],E,"Structure returned by `segments_iter()` on a…",N,N],[4,R[47],E,"Controls how the domain of a function is expanded using…",N,N],[13,"ExtendSegment",E,"Extend the segment at the edge of the function.",5,N],[13,"ExtendValue",E,"Add a constant segment with the value of the edge point of…",5,N],[5,R[4],E,"Returns an iterator over pairs `(x, values)`, where `x` is…",N,[[],[[R[1],[R[0]]],[R[0]]]]],[5,"sum",E,"Sums the functions together. Returns `None` in case of…",N,[[],[[R[2]],[R[1],[R[2]]]]]],[11,"new",E,"Creates a new `PiecewiseLinearFunction` from a vector of…",4,[[["vec",[R[3]]],[R[3]]],[R[1]]]],[11,"constant",E,"Returns a new constant `PiecewiseLinearFunction` with the…",4,[[[T]],[R[1]]]],[11,"domain",E,"Returns a function's domain, represented as its min and max.",4,[[["self"]]]],[11,"has_same_domain_as",E,"Checks whether this function has the same domain as…",4,[[["self"],[R[2]]],["bool"]]],[11,"segments_iter",E,"Returns an iterator over the segments of f.",4,[[["self"]],["segmentsiterator"]]],[11,R[4],E,"Returns an iterator over the joint points of inflection of…",4,[[[R[2]],["self"]],[[R[1],[R[0]]],[R[0]]]]],[11,"segment_at_x",E,"Returns a segment `((x1, y1), (x2, y2))` of this function…",4,[[["self"],[T]],[["line"],[R[1],["line"]]]]],[11,"y_at_x",E,"Computes the value f(x) for this piecewise linear function.",4,[[["self"],[T]],[R[1]]]],[11,"shrink_domain",E,R[5],4,[[["self"]],[[R[2]],[R[1],[R[2]]]]]],[11,"expand_domain",E,R[5],4,[[["self"],[R[42]]],[R[2]]]],[11,"add",E,"Sums this method with another piecewise linear function.",4,[[["self"],[R[2]]],[[R[2]],[R[1],[R[2]]]]]],[11,"max",E,R[5],4,[[["self"],[R[2]]],[[R[2]],[R[1],[R[2]]]]]],[11,"negate",E,"Returns -f.",4,[[["self"]],[R[2]]]],[11,"min",E,"Computes the minimum of this function and `other`.",4,[[["self"],[R[2]]],[[R[2]],[R[1],[R[2]]]]]],[11,"abs",E,"Computes the absolute value of this function.",4,[[["self"]],[R[2]]]],[11,"integrate",E,"Returns the integral of the considered function over its…",4,[[["self"]],[T]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[7],E,E,0,[[["self"]],[T]]],[11,R[8],E,E,0,[[[T],["self"]]]],[11,R[9],E,E,0,[[[U]],[R[6]]]],[11,R[10],E,E,0,[[],[R[6]]]],[11,R[11],E,E,0,[[["self"]],[T]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],[R[20]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[7],E,E,1,[[["self"]],[T]]],[11,R[8],E,E,1,[[[T],["self"]]]],[11,R[9],E,E,1,[[[U]],[R[6]]]],[11,R[10],E,E,1,[[],[R[6]]]],[11,R[11],E,E,1,[[["self"]],[T]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],[R[20]]]],[11,R[13],E,E,1,[[["self"],[T],["point"]],["g"]]],[11,R[14],E,E,1,[[["self"],[T]],["g"]]],[11,R[15],E,E,1,[[["self"],[T]]]],[11,R[16],E,E,1,[[["self"]],["aabb"]]],[11,R[17],E,E,1,[[["self"],["p"]]]],[11,R[18],E,E,1,[[["self"]],["bool"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[21],E,E,2,[[],["i"]]],[11,R[7],E,E,2,[[["self"]],[T]]],[11,R[8],E,E,2,[[[T],["self"]]]],[11,R[9],E,E,2,[[[U]],[R[6]]]],[11,R[10],E,E,2,[[],[R[6]]]],[11,R[11],E,E,2,[[["self"]],[T]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],[R[20]]]],[11,R[13],E,E,2,[[["self"],[T],["point"]],["g"]]],[11,R[14],E,E,2,[[["self"],[T]],["g"]]],[11,R[15],E,E,2,[[["self"],[T]]]],[11,R[16],E,E,2,[[["self"]],["aabb"]]],[11,R[17],E,E,2,[[["self"],["p"]]]],[11,R[18],E,E,2,[[["self"]],["bool"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[7],E,E,3,[[["self"]],[T]]],[11,R[8],E,E,3,[[[T],["self"]]]],[11,R[9],E,E,3,[[[U]],[R[6]]]],[11,R[10],E,E,3,[[],[R[6]]]],[11,R[11],E,E,3,[[["self"]],[T]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[["self"]],[R[20]]]],[11,R[13],E,E,3,[[["self"],[T],["point"]],["g"]]],[11,R[14],E,E,3,[[["self"],[T]],["g"]]],[11,R[15],E,E,3,[[["self"],[T]]]],[11,R[16],E,E,3,[[["self"]],["aabb"]]],[11,R[17],E,E,3,[[["self"],["p"]]]],[11,R[18],E,E,3,[[["self"]],["bool"]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[7],E,E,4,[[["self"]],[T]]],[11,R[8],E,E,4,[[[T],["self"]]]],[11,R[9],E,E,4,[[[U]],[R[6]]]],[11,R[10],E,E,4,[[],[R[6]]]],[11,R[11],E,E,4,[[["self"]],[T]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[12],E,E,4,[[["self"]],[R[20]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[21],E,E,6,[[],["i"]]],[11,R[9],E,E,6,[[[U]],[R[6]]]],[11,R[10],E,E,6,[[],[R[6]]]],[11,R[11],E,E,6,[[["self"]],[T]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[12],E,E,6,[[["self"]],[R[20]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[21],E,E,7,[[],["i"]]],[11,R[9],E,E,7,[[[U]],[R[6]]]],[11,R[10],E,E,7,[[],[R[6]]]],[11,R[11],E,E,7,[[["self"]],[T]]],[11,R[19],E,E,7,[[["self"]],[T]]],[11,R[12],E,E,7,[[["self"]],[R[20]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[7],E,E,5,[[["self"]],[T]]],[11,R[8],E,E,5,[[[T],["self"]]]],[11,R[9],E,E,5,[[[U]],[R[6]]]],[11,R[10],E,E,5,[[],[R[6]]]],[11,R[11],E,E,5,[[["self"]],[T]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[12],E,E,5,[[["self"]],[R[20]]]],[11,"haversine_destination",E,E,3,[[["self"],[T]],["point"]]],[11,R[22],E,"Minimum distance from a Point to a LineString",3,[[["self"],[R[23]]],[T]]],[11,R[22],E,E,2,[[["self"],[R[25]]],[T]]],[11,R[22],E,E,2,[[["self"],[R[23]]],[T]]],[11,R[22],E,E,1,[[["self"],[R[25]]],[T]]],[11,R[22],E,"Minimum distance from a LineString to a Point",2,[[["self"],["point"]],[T]]],[11,R[22],E,R[24],3,[[["self"],["line"]],[T]]],[11,R[22],E,"Minimum distance from a Point to a MultiLineString",3,[[["self"],["multilinestring"]],[T]]],[11,R[22],E,"Minimum distance from a Point to a MultiPoint",3,[[["self"],["multipoint"]],[T]]],[11,R[22],E,R[24],1,[[["self"],["point"]],[T]]],[11,R[22],E,"Minimum distance from a Point to a Polygon",3,[[["self"],[R[25]]],[T]]],[11,R[22],E,E,1,[[["self"],[R[23]]],[T]]],[11,R[22],E,"Minimum distance between two Points",3,[[["self"],["point"]],[T]]],[11,R[22],E,"Minimum distance from a Point to a MultiPolygon",3,[[["self"],[R[26]]],[T]]],[11,R[22],E,E,2,[[["self"],["line"]],[T]]],[11,R[22],E,E,1,[[["self"],["line"]],[T]]],[11,R[22],E,E,1,[[["self"],[R[26]]],[T]]],[11,"simplifyvw",E,E,2,[[[T],["self"]],[R[23]]]],[11,"frechet_distance",E,E,2,[[["self"],[R[23]]],[T]]],[11,R[27],E,E,2,[[["self"],["fn"]]]],[11,R[27],E,E,1,[[["self"],["fn"]]]],[11,R[27],E,E,3,[[["self"],["fn"]]]],[11,"haversine_distance",E,E,3,[[["self"],["point"]],[T]]],[11,"convex_hull",E,E,2,[[["self"]],[R[25]]]],[11,R[28],E,E,3,[[["self"],["point"]],["bool"]]],[11,R[28],E,E,2,[[["self"],["line"]],["bool"]]],[11,R[28],E,E,1,[[["self"],["line"]],["bool"]]],[11,R[28],E,E,2,[[["self"],["point"]],["bool"]]],[11,R[28],E,E,1,[[["self"],["point"]],["bool"]]],[11,R[28],E,E,1,[[["self"],[R[23]]],["bool"]]],[11,"simplifyvw_preserve",E,E,2,[[[T],["self"]],[R[23]]]],[11,"vincenty_distance",E,E,3,[[["self"],["point"]],[[R[6],[R[29]]],[R[29]]]]],[11,"simplify",E,E,2,[[[T],["self"]],[R[23]]]],[11,"winding_order",E,"Returns the winding order of this line None if the winding…",2,[[["self"]],[[R[30]],[R[1],[R[30]]]]]],[11,"points_cw",E,"Iterate over the points in a clockwise order",2,[[["self"]],["points"]]],[11,"points_ccw",E,"Iterate over the points in a counter-clockwise order",2,[[["self"]],["points"]]],[11,"make_cw_winding",E,"Change this line's points so they are in clockwise winding…",2,[[["self"]]]],[11,"make_ccw_winding",E,"Change this line's points so they are in counterclockwise…",2,[[["self"]]]],[11,R[31],E,E,1,[[["self"]],[T]]],[11,R[31],E,E,2,[[["self"]],[T]]],[11,R[32],E,E,3,[[["self"],["fn"]],[["error"],[R[6],["error"]]]]],[11,R[32],E,E,1,[[["self"],["fn"]],[["error"],[R[6],["error"]]]]],[11,R[32],E,E,2,[[["self"],["fn"]],[["error"],[R[6],["error"]]]]],[11,R[33],E,E,1,[[["self"],[R[25]]],["bool"]]],[11,R[33],E,E,1,[[["self"],[R[23]]],["bool"]]],[11,R[33],E,E,1,[[["self"],["line"]],["bool"]]],[11,R[33],E,E,3,[[["self"],["line"]],["bool"]]],[11,R[33],E,E,2,[[["self"],["line"]],["bool"]]],[11,R[33],E,E,2,[[["self"],[R[25]]],["bool"]]],[11,R[33],E,E,1,[[["self"],["point"]],["bool"]]],[11,R[33],E,E,2,[[["self"],[R[23]]],["bool"]]],[11,R[34],E,"The units of the returned value is meters.",1,[[["self"]],[[R[6],[R[29]]],[R[29]]]]],[11,R[34],E,E,2,[[["self"]],[[R[6],[R[29]]],[R[29]]]]],[11,"rotate",E,"Rotate the LineString about its centroid by the given…",2,[[["self"],[T]],[R[23]]]],[11,"rotate",E,E,1,[[["self"],[T]],["line"]]],[11,"rotate",E,"Rotate the Point about itself by the given number of…",3,[[["self"],[T]],["point"]]],[11,R[35],E,E,1,[[["self"]],[T]]],[11,R[35],E,E,2,[[["self"]],[T]]],[11,"area",E,E,1,[[["self"]],[T]]],[11,R[36],E,"Return the BoundingRect for a LineString",2,[[["self"]]]],[11,R[36],E,E,1,[[["self"]]]],[11,"haversine_intermediate",E,E,3,[[["self"],["point"],[T]],["point"]]],[11,"haversine_intermediate_fill",E,E,3,[[["point"],["self"],[T],["bool"]],[["vec",["point"]],["point"]]]],[11,R[37],E,E,2,[[["self"]]]],[11,R[37],E,E,1,[[["self"]]]],[11,R[37],E,E,3,[[["self"]]]],[11,R[38],E,E,1,[[["self"],["fn"]]]],[11,R[38],E,E,3,[[["self"],["fn"]]]],[11,R[38],E,E,2,[[["self"],["fn"]]]],[11,"bearing",E,E,3,[[["self"],["point"]],[T]]],[11,R[39],E,E,2,[[["self"],["point"]],[R[40]]]],[11,R[39],E,E,3,[[["self"],["point"]],[R[40]]]],[11,R[39],E,E,1,[[["self"],["point"]],[R[40]]]],[11,"fmt",E,E,1,[[["self"],[R[41]]],[["error"],[R[6],["error"]]]]],[11,"fmt",E,E,0,[[["self"],[R[41]]],[["error"],[R[6],["error"]]]]],[11,"fmt",E,E,3,[[["self"],[R[41]]],[["error"],[R[6],["error"]]]]],[11,"fmt",E,E,2,[[["self"],[R[41]]],[["error"],[R[6],["error"]]]]],[11,"from",E,E,3,[[],["point"]]],[11,"from",E,E,3,[[],["point"]]],[11,"from",E,E,0,[[],[R[3]]]],[11,"from",E,E,0,[[["point"]],[R[3]]]],[11,"from",E,E,1,[[],["line"]]],[11,"from",E,E,3,[[[R[3]]],["point"]]],[11,"from",E,E,2,[[["vec"]],[R[23]]]],[11,"from",E,E,0,[[],[R[3]]]],[11,R[21],E,E,2,[[]]],[11,"index",E,E,2,[[["self"],["usize"]],[R[3]]]],[11,"eq",E,E,3,[[["self"],["point"]],["bool"]]],[11,"ne",E,E,3,[[["self"],["point"]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[3]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[3]]],["bool"]]],[11,"eq",E,E,1,[[["self"],["line"]],["bool"]]],[11,"ne",E,E,1,[[["self"],["line"]],["bool"]]],[11,"eq",E,E,2,[[["self"],[R[23]]],["bool"]]],[11,"ne",E,E,2,[[["self"],[R[23]]],["bool"]]],[11,R[17],E,E,2,[[["self"],["point"]],[T]]],[11,R[17],E,E,1,[[["self"],["point"]],[T]]],[11,"sub",E,"Subtract a point from the given point.",3,[[["point"]],["point"]]],[11,"generate",E,E,3,[[["impl fn(usize) -> self::scalar"]],["point"]]],[11,"nth",E,E,3,[[["self"],["usize"]]]],[11,"nth_mut",E,E,3,[[["self"],["usize"]]]],[11,"add",E,"Add a point to the given point.",3,[[["point"]],["point"]]],[11,"index_mut",E,E,2,[[["self"],["usize"]],[R[3]]]],[11,R[16],E,E,1,[[["self"]]]],[11,R[16],E,E,2,[[["self"]]]],[11,"from_iter",E,E,2,[[["i"]],[R[23]]]],[11,"neg",E,"Returns a point with the x and y components negated.",3,[[],["point"]]],[11,"clone",E,E,1,[[["self"]],["line"]]],[11,"clone",E,E,3,[[["self"]],["point"]]],[11,"clone",E,E,0,[[["self"]],[R[3]]]],[11,"clone",E,E,2,[[["self"]],[R[23]]]],[11,"next",E,E,6,[[["self"]],[R[1]]]],[11,"next",E,E,7,[[["self"]],[R[1]]]],[11,"clone",E,E,4,[[["self"]],[R[2]]]],[11,"clone",E,E,5,[[["self"]],[R[42]]]],[11,"into",E,E,4,[[],["vec"]]],[11,"eq",E,E,4,[[["self"],[R[2]]],["bool"]]],[11,"ne",E,E,4,[[["self"],[R[2]]],["bool"]]],[11,"eq",E,E,5,[[["self"],[R[42]]],["bool"]]],[11,"fmt",E,E,4,[[["self"],[R[41]]],[R[6]]]],[11,"fmt",E,E,5,[[["self"],[R[41]]],[R[6]]]],[11,R[9],E,E,4,[[[R[23]]],[R[6]]]],[11,R[9],E,E,4,[[["vec",[R[3]]],[R[3]]],[R[6]]]],[11,R[9],E,E,4,[[["vec",["point"]],["point"]],[R[6]]]],[11,R[9],E,E,4,[[["vec"]],[R[6]]]],[11,"neg",E,E,4,[[]]],[11,"x_y",E,R[43],0,[[["self"]]]],[11,"new",E,"Creates a new line segment.",1,[[["c"]],["line"]]],[11,"dx",E,"Calculate the difference in ‘x’ components (Δx).",1,[[["self"]],[T]]],[11,"dy",E,"Calculate the difference in ‘y’ components (Δy).",1,[[["self"]],[T]]],[11,"slope",E,"Calculate the slope (Δy/Δx).",1,[[["self"]],[T]]],[11,"determinant",E,"Calculate the determinant of the line.",1,[[["self"]],[T]]],[11,"start_point",E,E,1,[[["self"]],["point"]]],[11,"end_point",E,E,1,[[["self"]],["point"]]],[11,"points",E,E,1,[[["self"]]]],[11,"points_iter",E,E,2,[[["self"]],["pointsiter"]]],[11,"into_points",E,E,2,[[],[["vec",["point"]],["point"]]]],[11,"lines",E,"Return an `Line` iterator that yields one `Line` for each…",2,[[["self"]]]],[11,"triangles",E,E,2,[[["self"]]]],[11,"num_coords",E,"Return the number of coordinates in the `LineString`.",2,[[["self"]],["usize"]]],[11,"new",E,"Creates a new point.",3,[[[T]],["point"]]],[11,"x",E,"Returns the x/horizontal component of the point.",3,[[],[T]]],[11,"set_x",E,"Sets the x/horizontal component of the point.",3,[[["self"],[T]],["point"]]],[11,"y",E,"Returns the y/vertical component of the point.",3,[[],[T]]],[11,"set_y",E,"Sets the y/vertical component of the point.",3,[[["self"],[T]],["point"]]],[11,"x_y",E,R[43],3,[[]]],[11,"lng",E,"Returns the longitude/horizontal component of the point.",3,[[],[T]]],[11,"set_lng",E,"Sets the longitude/horizontal component of the point.",3,[[["self"],[T]],["point"]]],[11,"lat",E,"Returns the latitude/vertical component of the point.",3,[[],[T]]],[11,"set_lat",E,"Sets the latitude/vertical component of the point.",3,[[["self"],[T]],["point"]]],[11,"dot",E,"Returns the dot product of the two points: `dot = x1 * x2…",3,[[["point"]],[T]]],[11,"cross_prod",E,"Returns the cross product of 3 points. A positive value…",3,[[["point"]],[T]]],[11,"to_degrees",E,"Converts the (x,y) components of Point to degrees",3,[[],["point"]]],[11,"to_radians",E,"Converts the (x,y) components of Point to radians",3,[[],["point"]]]],"p":[[3,R[44]],[3,"Line"],[3,R[45]],[3,"Point"],[3,R[46]],[4,R[47]],[3,R[48]],[3,R[49]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);