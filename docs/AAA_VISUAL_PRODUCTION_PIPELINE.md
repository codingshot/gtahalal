# Dunya — high-fidelity original visual production pipeline
Status: design and engineering plan; not achieved fidelity. Never claim 'GTA-quality' from blockout geometry.

## Reference ingestion and image parity
Original Dunya mockups are not presently available in the inspected repository or accessible user files. Do not invent their composition. When supplied, place rights-cleared reference images under assets/references/dunya/ with license/provenance manifest and filenames; map each reference to shot ID, camera focal length, horizon, character silhouette, material palette, lighting, UI safe zones and target device. Keep a source-vs-render comparison and log approved deviations. No Rockstar screenshots, meshes, shaders, logos or UI copying.

## Fidelity ladder
L0: procedural primitive blockout (current preview).
L1: art-directed original low-poly city and character silhouettes.
L2: rigged original characters with coherent PBR materials, authored buildings and animation.
L3: high-fidelity modular environments, scanned/licensed textures, realistic skin/hair/cloth, facial rigs, motion matching and authored lighting.
L4: optimized cinematic-quality scenes with reproducible screenshots and measured performance on target devices. Do not promise L4 without budget/performance evidence.

## Character art requirements
Ahmed and Fatimah: original adult models, realistic anatomy and face proportions, culturally reviewed modest clothing, hijab cloth silhouette and proper head/neck deformation, layered garment materials, footwear, hair grooming where visible, skin tone variation without stereotypes, accessibility aids, rigged hands and facial blendshapes. Both have equivalent animation and narrative quality. Avoid real-person likeness without consent.

## Environment art requirements
One fictional Miami-inspired starter block first: mosque exterior only after review, apartments, storefronts, transit stop, sidewalk ramps, street trees, signage, vehicles, weathered concrete, glass, metal, fabric, asphalt, road markings, debris-free accessible navigation. Later Nairobi/Lagos/etc require local art and cultural review. Architectural details must be original or licensed.

## Rendering and animation
glTF/GLB with PBR metallic-roughness, KTX2/BasisU textures, Meshopt/Draco where supported, normal/ORM maps, baked GI + selectively dynamic shadows, tone mapping and color-managed textures. Third-person camera, collision/navmesh, walk/run/idle/sit/prayer animation sets (religious animation requires review), blend trees, foot IK, turn-in-place, facial dialogue and cloth approximations. Avoid heavyweight postprocessing on mobile.

## Performance targets (provisional)
Desktop 1080p: target 60 FPS on defined midrange GPU; mobile 720p: target 30 FPS on defined midrange device; budgets must be profiled before approval. Track draw calls, triangles, GPU frame time, VRAM, texture bandwidth, load times and memory. LOD, frustum culling, instancing and streaming districts required for expansion. Low mode disables expensive shadows and effects.

## Acceptance and verification
- Compare screenshots to *provided* approved original mockups at matched camera and viewport; no pixel-perfect claims without actual images.
- Character review: front/side/back/3/4 views, neutral pose, walk cycle, close-up facial expression, hijab and garment clipping checks, skin material across lighting.
- World review: daytime, golden hour, night, rain, low-spec mode and mobile touch controls.
- Accessibility: readable HUD, contrast, captions, reduced motion, keyboard/touch/gamepad alternatives.
- License and provenance manifest for every texture, mesh, rig, animation, sound and reference.
- Automated builds and real browser captures required; current preview not verified.
